import { courses, type Course } from '../data/courses';

const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

interface CourseFilters {
  search?: string;
  category?: string;
  level?: string;
}

export async function getCourses({ search = '', category = '', level = '' }: CourseFilters = {}): Promise<Course[]> {
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

export async function getCourseBySlug(slug: string): Promise<Course> {
  await delay(200);
  const course = courses.find((c) => c.slug === slug);
  if (!course) throw new Error('Course not found');
  return course;
}

export function getCategories(): string[] {
  return [...new Set(courses.map((c) => c.category))];
}

export function getLevels(): string[] {
  return [...new Set(courses.map((c) => c.level))];
}
