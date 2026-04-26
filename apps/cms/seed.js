/**
 * CMS Seed Script
 *
 * Sets up the Strapi CMS with:
 * - A default admin account (admin@grff.com / Admin1234!)
 * - Public read permissions for the Homepage API
 * - Homepage content with images matching the original hardcoded data
 *
 * Usage:
 *   pnpm seed:cms          (from monorepo root)
 *   pnpm seed              (from apps/cms)
 *
 * Safe to run multiple times — skips anything that already exists.
 */

const { createStrapi } = require('@strapi/strapi');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ADMIN_EMAIL = 'admin@grff.com';
const ADMIN_PASSWORD = 'Admin1234!';

const COURSE_IMAGES = [
  {
    name: 'fullstack-ai-python.jpg',
    url: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'react-nextjs.jpg',
    url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'nodejs-backend.jpg',
    url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'docker-devops.jpg',
    url: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80',
  },
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'GRFF-CMS-Seed/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Download failed: HTTP ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(destPath);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
      stream.on('error', reject);
    }).on('error', reject);
  });
}

async function uploadImage(strapi, filePath, fileName) {
  const stats = fs.statSync(filePath);
  const uploadService = strapi.plugin('upload').service('upload');

  const [uploaded] = await uploadService.upload({
    data: {},
    files: {
      filepath: filePath,
      originalFilename: fileName,
      mimetype: 'image/jpeg',
      size: stats.size,
    },
  });

  return uploaded;
}

async function downloadAndUploadImages(strapi) {
  const tmpDir = path.join(__dirname, '.tmp', 'seed-images');
  fs.mkdirSync(tmpDir, { recursive: true });

  const uploadedImages = [];

  for (const img of COURSE_IMAGES) {
    const existing = await strapi.query('plugin::upload.file').findOne({
      where: { name: path.parse(img.name).name },
    });

    if (existing) {
      console.log(`  Image "${img.name}" already uploaded (id: ${existing.id})`);
      uploadedImages.push(existing);
      continue;
    }

    const destPath = path.join(tmpDir, img.name);

    console.log(`  Downloading ${img.name}...`);
    await downloadFile(img.url, destPath);

    console.log(`  Uploading ${img.name} to media library...`);
    const uploaded = await uploadImage(strapi, destPath, img.name);
    uploadedImages.push(uploaded);
    console.log(`  Uploaded "${img.name}" (id: ${uploaded.id})`);
  }

  fs.rmSync(tmpDir, { recursive: true, force: true });

  return uploadedImages;
}

async function ensureAdmin(strapi) {
  const existingAdmin = await strapi
    .query('admin::user')
    .findOne({ where: { email: ADMIN_EMAIL } });

  if (existingAdmin) {
    console.log(`Admin account already exists (${ADMIN_EMAIL})`);
    return;
  }

  const superAdminRole = await strapi
    .query('admin::role')
    .findOne({ where: { code: 'strapi-super-admin' } });

  const hashedPassword = await strapi.service('admin::auth').hashPassword(ADMIN_PASSWORD);

  await strapi.query('admin::user').create({
    data: {
      firstname: 'Admin',
      lastname: 'GRFF',
      email: ADMIN_EMAIL,
      password: hashedPassword,
      isActive: true,
      blocked: false,
      roles: superAdminRole ? [superAdminRole.id] : [],
    },
  });

  console.log(`Admin account created (${ADMIN_EMAIL} / ${ADMIN_PASSWORD})`);
}

async function ensurePublicPermissions(strapi) {
  const publicRole = await strapi
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    console.log('Warning: Public role not found, skipping permissions');
    return;
  }

  const existing = await strapi
    .query('plugin::users-permissions.permission')
    .findOne({
      where: {
        action: 'api::homepage.homepage.find',
        role: publicRole.id,
      },
    });

  if (existing) {
    console.log('Public permission for homepage.find already exists');
    return;
  }

  await strapi.query('plugin::users-permissions.permission').create({
    data: {
      action: 'api::homepage.homepage.find',
      role: publicRole.id,
    },
  });

  console.log('Public permission set for homepage.find');
}

async function seedHomepage(strapi) {
  const existing = await strapi.documents('api::homepage.homepage').findFirst();

  if (existing) {
    console.log('Homepage content already exists, skipping');
    return;
  }

  console.log('Uploading course images...');
  const images = await downloadAndUploadImages(strapi);

  const doc = await strapi.documents('api::homepage.homepage').create({
    data: {
      hero: {
        badgeText: 'Powered by curiosity, built for the future',
        titleLine1: 'Get Ready',
        titleHighlight: 'For Future',
        subtitle:
          'The platform where students learn, test, track, and grow. Master in-demand skills with courses, assessments, and real-time tech insights.',
        primaryButtonText: 'Get Started',
        primaryButtonLink: '/courses',
        secondaryButtonText: 'Browse Courses',
        secondaryButtonLink: '/courses',
      },
      stats: [
        { value: '50+', label: 'Courses' },
        { value: '10K+', label: 'Students' },
        { value: '95%', label: 'Satisfaction' },
        { value: '24/7', label: 'Access' },
      ],
      featuredCoursesSection: {
        sectionLabel: 'Featured Courses',
        sectionTitle: 'Learn with premium',
        sectionTitleHighlight: 'course collections',
        sectionSubtitle:
          'Explore curated learning paths designed to help students and developers build real-world skills with modern technologies.',
      },
      featuredCourseCards: [
        { title: 'Full-Stack AI with Python', category: 'AI & Python', image: images[0]?.id },
        { title: 'Complete React and NextJS', category: 'Frontend', image: images[1]?.id },
        { title: 'Node.js Beginner to Advance', category: 'Backend', image: images[2]?.id },
        { title: 'Docker and DevOps Essentials', category: 'DevOps', image: images[3]?.id },
      ],
      featuresSection: {
        sectionTitle: 'Everything you need to',
        sectionTitleHighlight: 'level up',
        sectionSubtitle:
          'A complete ecosystem for students who want to stay ahead of the curve.',
      },
      featureCards: [
        {
          title: 'Curated Courses',
          description: 'Industry-relevant courses designed for the next generation of developers.',
          iconName: 'BookOpen',
        },
        {
          title: 'Smart Assessments',
          description: 'Test your knowledge with adaptive quizzes and track your progress.',
          iconName: 'Brain',
        },
        {
          title: 'Growth Tracking',
          description: 'Visualize your learning journey with detailed analytics and insights.',
          iconName: 'BarChart3',
        },
        {
          title: 'Tech Updates',
          description: 'Stay ahead with curated blogs and the latest industry news.',
          iconName: 'Newspaper',
        },
      ],
      cta: {
        title: 'Ready to shape your future?',
        subtitle: 'Join thousands of students already building their careers on GRFF.',
        buttonText: 'Start Learning Now',
        buttonLink: '/courses',
      },
    },
  });

  await strapi.documents('api::homepage.homepage').publish({
    documentId: doc.documentId,
  });

  console.log('Homepage content created and published');
}

async function seed() {
  console.log('\n--- GRFF CMS Seed ---\n');

  const strapi = await createStrapi().load();

  await ensureAdmin(strapi);
  await ensurePublicPermissions(strapi);
  await seedHomepage(strapi);

  console.log('\n--- Seed complete ---');
  console.log(`Admin panel: http://localhost:1337/admin`);
  console.log(`Login:       ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}\n`);

  await strapi.destroy();
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
