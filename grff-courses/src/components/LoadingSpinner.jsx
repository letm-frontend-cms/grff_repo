const sizes = {
  sm: 'h-5 w-5 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
};

export function LoadingSpinner({ size = 'md' }) {
  return (
    <div class="flex items-center justify-center py-20" role="status">
      <div class={`${sizes[size]} animate-spin rounded-full border-white/20 border-t-violet-500`} />
      <span class="sr-only">Loading...</span>
    </div>
  );
}
