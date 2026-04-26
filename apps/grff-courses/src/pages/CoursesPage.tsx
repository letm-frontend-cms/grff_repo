import { useState, useEffect, useCallback } from 'preact/hooks';
import { Search, X } from 'lucide-preact';
import { getCourses, getCategories, getLevels, startCourse, completeCourse } from '../services/courseService';
import { CourseCard } from '../components/CourseCard';
import { EmptyState } from '../components/EmptyState';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useAuth } from '../hooks/useAuth';
import type { Course } from '../data/courses';

export function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const { isAuthenticated } = useAuth();

  const categories = getCategories();
  const levels = getLevels();

  const fetchCourses = useCallback(() => {
    setLoading(true);
    getCourses({ search, category, level })
      .then(setCourses)
      .finally(() => setLoading(false));
  }, [search, category, level]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  async function handleCourseAction(course: Course) {
    try {
      if (course.userStatus === 'in-progress') {
        await completeCourse(course.id);
      } else {
        await startCourse(course.id);
      }
      fetchCourses();
    } catch (err: any) {
      alert(err.message || 'Something went wrong');
    }
  }

  function clearFilters() {
    setSearch('');
    setCategory('');
    setLevel('');
  }

  const hasFilters = search || category || level;

  return (
    <section class="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header */}
      <div class="mb-10">
        <p class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-violet-300 sm:text-sm">
          Courses
        </p>
        <h1 class="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Explore{' '}
          <span class="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
            our courses
          </span>
        </h1>
        <p class="max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
          Find the perfect course to level up your skills. Filter by category, difficulty, or search for specific topics.
        </p>
      </div>

      {/* Search & Filters */}
      <div class="mb-8 flex flex-col gap-4 sm:gap-5">
        {/* Search bar */}
        <div class="relative">
          <Search class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
            placeholder="Search courses..."
            class="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-sm text-white placeholder-gray-500 outline-none transition focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 sm:text-base"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              class="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-gray-400 hover:text-white"
            >
              <X class="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Filter chips */}
        <div class="flex flex-wrap gap-2">
          {/* Category filters */}
          <button
            onClick={() => setCategory('')}
            class={`rounded-lg px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
              !category
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? '' : cat)}
              class={`rounded-lg px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                category === cat
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                  : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}

          <div class="mx-1 hidden h-8 w-px bg-white/10 sm:block" />

          {/* Level filters */}
          {levels.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevel(level === lvl ? '' : lvl)}
              class={`rounded-lg px-3 py-1.5 text-xs font-medium transition sm:text-sm ${
                level === lvl
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                  : 'border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <LoadingSpinner size="lg" />
      ) : courses.length === 0 ? (
        <EmptyState
          type="search"
          title={hasFilters ? 'No courses match your filters' : 'No courses available'}
          description={
            hasFilters
              ? "Try adjusting your search or filters to find what you're looking for."
              : 'Check back soon — new courses are added regularly.'
          }
          actionLabel={hasFilters ? 'Clear Filters' : undefined}
          onAction={hasFilters ? clearFilters : undefined}
        />
      ) : (
        <>
          <p class="mb-6 text-sm text-gray-400">
            Showing {courses.length} course{courses.length !== 1 ? 's' : ''}
          </p>
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} isAuthenticated={isAuthenticated} onAction={handleCourseAction} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
