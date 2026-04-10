import { courses } from '../data/courses';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCourses({ search = '', category = '', level = '' } = {}) {
  await delay(300);

  let filtered = [...courses];

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }

  if (category) {
    filtered = filtered.filter((c) => c.category === category);
  }

  if (level) {
    filtered = filtered.filter((c) => c.level === level);
  }

  return filtered;
}

export async function getCourseBySlug(slug) {
  await delay(200);
  const course = courses.find((c) => c.slug === slug);
  if (!course) throw new Error('Course not found');
  return course;
}

export function getCategories() {
  return [...new Set(courses.map((c) => c.category))];
}

export function getLevels() {
  return [...new Set(courses.map((c) => c.level))];
}
