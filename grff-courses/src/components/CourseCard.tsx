import { Clock, BookOpen, Star, FlaskConical } from 'lucide-preact';
import type { Course } from '../data/courses';

interface CourseCardProps {
  course: Course;
  onStartTest?: (course: Course) => void;
}

export function CourseCard({ course, onStartTest }: CourseCardProps) {
  return (
    <a
      href={`/courses/${course.slug}`}
      class="group block rounded-3xl border border-white/10 bg-white/[0.03] p-3 transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.16)]"
    >
      <div class="relative overflow-hidden rounded-2xl">
        <img
          src={course.image}
          alt={course.title}
          class="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-52"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span class="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] text-violet-200 backdrop-blur-md sm:px-3 sm:text-xs">
          {course.category}
        </span>
        <span class="absolute right-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] text-white/80 backdrop-blur-md sm:px-3 sm:text-xs">
          {course.level}
        </span>
      </div>

      <div class="px-1 pb-1 pt-4 sm:px-2 sm:pb-2">
        <h3 class="text-lg font-semibold text-white sm:text-xl">{course.title}</h3>

        <p class="mt-2 line-clamp-2 text-sm leading-6 text-gray-400">
          {course.description}
        </p>

        <div class="mt-3 flex items-center gap-3 text-xs text-gray-400">
          <span class="flex items-center gap-1">
            <Clock class="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span class="flex items-center gap-1">
            <BookOpen class="h-3.5 w-3.5" />
            {course.lessons} lessons
          </span>
          <span class="flex items-center gap-1 text-yellow-400">
            <Star class="h-3.5 w-3.5 fill-yellow-400" />
            {course.rating}
          </span>
        </div>

        <div class="mt-4 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              class="h-6 w-6 rounded-full"
              loading="lazy"
            />
            <span class="text-xs text-gray-400">{course.instructor.name}</span>
          </div>

          {course.hasTest && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onStartTest?.(course);
              }}
              class="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-purple-600 px-3 py-1.5 text-xs font-medium text-white transition hover:shadow-lg hover:shadow-violet-500/25"
            >
              <FlaskConical class="h-3.5 w-3.5" />
              Start Test
            </button>
          )}
        </div>
      </div>
    </a>
  );
}
