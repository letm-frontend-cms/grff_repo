<script>
  import { page } from '$app/stores';
  import { AlertTriangle } from 'lucide-svelte';
</script>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
  <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 sm:h-20 sm:w-20">
    <AlertTriangle class="h-8 w-8 text-red-400 sm:h-10 sm:w-10" />
  </div>

  <h1 class="mb-2 text-4xl font-bold sm:text-5xl">
    {$page.status}
  </h1>

  <p class="mb-8 max-w-md text-base text-gray-400 sm:text-lg">
    {#if $page.status === 404}
      The page you're looking for doesn't exist or has been moved.
    {:else}
      Something went wrong. Please try again later.
    {/if}
  </p>

  <a
    href="/"
    class="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:shadow-violet-500/25 sm:text-base"
  >
    Back to Home
  </a>
</div>
