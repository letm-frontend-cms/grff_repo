import type { Course } from '../data/courses';
import { request } from './api';

interface CourseFilters {
  search?: string;
  category?: string;
  level?: string;
}

let cachedCourses: Course[] = [];

export async function getCourses({ search = '', category = '', level = '' }: CourseFilters = {}): Promise<Course[]> {
  try {
    const res = await request<Course[]>('/courses');
    cachedCourses = res.data || [];
  } catch {
    cachedCourses = [];
  }

  let filtered = [...cachedCourses];

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

export async function startCourse(courseId: number): Promise<void> {
  await request(`/courses/${courseId}/start`, { method: 'POST' });
}

export async function completeCourse(courseId: number): Promise<void> {
  await request(`/courses/${courseId}/complete`, { method: 'POST' });
}

export function getCategories(): string[] {
  return [...new Set(cachedCourses.map((c) => c.category))];
}

export function getLevels(): string[] {
  return [...new Set(cachedCourses.map((c) => c.level))];
}
