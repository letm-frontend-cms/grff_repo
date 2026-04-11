<script lang="ts">
  import type { Post } from '../lib/mock-data';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

<a
  href="/#/blog/{post.id}"
  class="group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
>
  <div class="mb-3 flex items-center justify-between">
    <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
      {post.category}
    </span>
    <span class="text-xs text-muted-foreground">{post.readTime} min read</span>
  </div>

  <h3 class="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
    {post.title}
  </h3>

  <p class="flex-1 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>

  <div class="mt-4 flex items-center justify-between border-t border-border pt-3">
    <span class="text-xs font-medium text-foreground">{post.author}</span>
    <span class="text-xs text-muted-foreground">{post.date}</span>
  </div>
</a>
