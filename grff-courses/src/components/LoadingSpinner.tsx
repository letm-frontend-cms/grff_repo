type SpinnerSize = 'sm' | 'md' | 'lg';

const sizes: Record<SpinnerSize, string> = {
  sm: 'h-5 w-5 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
};

interface LoadingSpinnerProps {
  size?: SpinnerSize;
}

export function LoadingSpinner({ size = 'md' }: LoadingSpinnerProps) {
  return (
    <div class="flex items-center justify-center py-20" role="status">
      <div class={`${sizes[size]} animate-spin rounded-full border-white/20 border-t-violet-500`} />
      <span class="sr-only">Loading...</span>
    </div>
  );
}
