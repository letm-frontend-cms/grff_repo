<script lang="ts">
  import BlogCard from '../components/BlogCard.svelte';
  import { fetchBlogs } from '../lib/api';
  import type { Blog } from '../lib/types';

  let blogs = $state<Blog[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);

  $effect(() => {
    fetchBlogs()
      .then((data) => {
        blogs = data.slice(0, 6);
      })
      .catch(() => {
        error = 'Unable to load articles at the moment.';
      })
      .finally(() => {
        loading = false;
      });
  });
</script>

<section>
  <div class="mb-8">
    <h1 class="text-4xl font-bold text-foreground">Welcome to GRFF Blog</h1>
    <p class="mt-2 text-lg text-muted-foreground">
      Insights, tutorials and stories from our community.
    </p>
  </div>

  <h2 class="mb-4 text-2xl font-semibold text-foreground">Latest Articles</h2>

  {#if loading}
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each { length: 6 } as _}
        <div class="h-48 animate-pulse rounded-xl border border-border bg-surface"></div>
      {/each}
    </div>
  {:else if error}
    <div class="rounded-lg border border-destructive/30 bg-destructive/10 px-5 py-4 text-sm text-destructive">
      {error}
    </div>
  {:else if blogs.length === 0}
    <p class="text-muted-foreground">No articles are available right now.</p>
  {:else}
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each blogs as blog (blog._id)}
        <BlogCard {blog} />
      {/each}
    </div>
  {/if}
</section>
