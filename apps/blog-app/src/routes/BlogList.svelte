<script lang="ts">
  import BlogCard from '../components/BlogCard.svelte';
  import { fetchBlogs, setupBlogStream } from '../lib/api';
  import type { Blog } from '../lib/types';

  let blogs = $state<Blog[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);
  let search = $state('');

  const filtered = $derived.by(() =>
    blogs.filter(
      (b) =>
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.content.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  $effect(() => {
    let mounted = true;

    fetchBlogs()
      .then((data) => {
        if (mounted) blogs = data;
      })
      .catch(() => {
        if (mounted) error = 'Unable to load articles at the moment.';
      })
      .finally(() => {
        if (mounted) loading = false;
      });

    // SSE: prepend new blog posts as they arrive in real time
    const stopStream = setupBlogStream((newBlog) => {
      if (mounted) blogs = [newBlog, ...blogs];
    });

    return () => {
      mounted = false;
      stopStream();
    };
  });
</script>

<section>
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-foreground">All Articles</h1>
    {#if !loading}
      <p class="mt-1 text-muted-foreground">{blogs.length} article{blogs.length === 1 ? '' : 's'} published</p>
    {/if}
  </div>

  <div class="mb-6">
    <input
      type="search"
      bind:value={search}
      placeholder="Search articles…"
      class="w-full rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>

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
  {:else if filtered.length === 0}
    <p class="text-muted-foreground">
      {search ? 'No articles match your search.' : 'No articles are available right now.'}
    </p>
  {:else}
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each filtered as blog (blog._id)}
        <BlogCard {blog} />
      {/each}
    </div>
  {/if}
</section>
