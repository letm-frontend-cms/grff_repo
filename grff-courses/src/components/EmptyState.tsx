import { SearchX, BookX, AlertCircle, type LucideIcon } from 'lucide-preact';

type EmptyStateType = 'search' | 'courses' | 'error';

const icons: Record<EmptyStateType, LucideIcon> = {
  search: SearchX,
  courses: BookX,
  error: AlertCircle,
};

interface EmptyStateProps {
  type?: EmptyStateType;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  type = 'courses',
  title = 'No courses found',
  description = "Try adjusting your search or filters to find what you're looking for.",
  actionLabel,
  onAction,
}: EmptyStateProps) {
  const Icon = icons[type] || icons.courses;

  return (
    <div class="flex flex-col items-center justify-center py-20 text-center">
      <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-600/10 sm:h-20 sm:w-20">
        <Icon class="h-8 w-8 text-violet-400 sm:h-10 sm:w-10" />
      </div>

      <h3 class="mb-2 text-xl font-semibold text-white sm:text-2xl">{title}</h3>

      <p class="mb-8 max-w-md text-sm text-gray-400 sm:text-base">{description}</p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          class="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-violet-500/25"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
