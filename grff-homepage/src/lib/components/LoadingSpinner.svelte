<script>
  let { size = 'md', label = 'Loading...' } = $props();

  const sizes = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-[3px]',
    lg: 'h-12 w-12 border-4',
  };
</script>

<div class="flex flex-col items-center justify-center gap-3" role="status" aria-label={label}>
  <div
    class="{sizes[size]} animate-spin rounded-full border-white/20 border-t-violet-500"
  ></div>
  <span class="sr-only">{label}</span>
</div>
