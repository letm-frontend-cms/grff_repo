<script lang="ts">
  import { fetchBlog, formatDate, getReadTime } from '../lib/api';
  import type { Blog } from '../lib/types';

  interface Props {
    params: { id: string };
  }

  let { params }: Props = $props();

  let blog = $state<Blog | null>(null);
  let loading = $state(true);
  let error = $state<string | null>(null);

  $effect(() => {
    let mounted = true;
    loading = true;
    error = null;
    blog = null;

    fetchBlog(params.id)
      .then((data) => {
        if (mounted) blog = data;
      })
      .catch(() => {
        if (mounted) error = 'not-found';
      })
      .finally(() => {
        if (mounted) loading = false;
      });

    return () => {
      mounted = false;
    };
  });
</script>

{#if loading}
  <div class="mx-auto max-w-2xl space-y-4">
    <div class="h-4 w-24 animate-pulse rounded bg-surface"></div>
    <div class="h-10 w-3/4 animate-pulse rounded bg-surface"></div>
    <div class="h-4 w-full animate-pulse rounded bg-surface"></div>
    <div class="h-4 w-5/6 animate-pulse rounded bg-surface"></div>
    <div class="h-4 w-full animate-pulse rounded bg-surface"></div>
  </div>
{:else if error || !blog}
  <div class="text-center py-20">
    <h2 class="text-2xl font-semibold text-foreground">Article not found</h2>
    <p class="mt-2 text-muted-foreground">The article you're looking for doesn't exist or was removed.</p>
    <a href="#/blog" class="mt-6 inline-block rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
      Browse all articles
    </a>
  </div>
{:else}
  <article class="mx-auto max-w-2xl">
    <a href="#/blog" class="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
      &larr; Back to articles
    </a>

    <div class="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
      <span class="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
        {blog.tag ?? 'General'}
      </span>
      <span>{formatDate(blog.createdAt)}</span>
      <span>{getReadTime(blog.content)}</span>
    </div>

    <h1 class="mb-6 text-4xl font-bold text-foreground">{blog.title}</h1>

    <div class="prose prose-neutral max-w-none text-foreground">
      <p class="leading-relaxed whitespace-pre-wrap">{blog.content}</p>
    </div>
  </article>
{/if}
