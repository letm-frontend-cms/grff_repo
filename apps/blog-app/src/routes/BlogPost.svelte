<script lang="ts">
  import { MOCK_POSTS } from '../lib/mock-data';

  interface Props {
    params: { id: string };
  }

  let { params }: Props = $props();

  const post = $derived(MOCK_POSTS.find((p) => p.id === params.id));
</script>

{#if post}
  <article class="mx-auto max-w-2xl">
    <a href="/#/blog" class="mb-6 inline-flex items-center gap-1 text-sm text-primary hover:underline">
      &larr; Back to articles
    </a>

    <div class="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
      <span class="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
        {post.category}
      </span>
      <span>{post.date}</span>
      <span>{post.readTime} min read</span>
    </div>

    <h1 class="mb-4 text-4xl font-bold text-foreground">{post.title}</h1>

    <div class="mb-6 flex items-center gap-3">
      <div class="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary">
        {post.author[0]}
      </div>
      <span class="text-sm font-medium text-foreground">{post.author}</span>
    </div>

    <div class="prose prose-neutral max-w-none text-foreground">
      <p class="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
      <p class="mt-4 leading-relaxed">{post.content}</p>
    </div>
  </article>
{:else}
  <div class="text-center py-20">
    <h2 class="text-2xl font-semibold text-foreground">Article not found</h2>
    <a href="/#/blog" class="mt-4 inline-block text-primary hover:underline">Browse all articles</a>
  </div>
{/if}
