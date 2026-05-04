<script lang="ts">
  import type { Blog } from '../lib/types';
  import { formatDate, getReadTime } from '../lib/api';

  interface Props {
    blog: Blog;
  }

  let { blog }: Props = $props();
</script>

<a
  href="#/blog/{blog._id}"
  class="group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition-shadow hover:shadow-md"
>
  <div class="mb-3 flex items-center justify-between">
    <span class="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
      {blog.tag ?? 'General'}
    </span>
    <span class="text-xs text-muted-foreground">{getReadTime(blog.content)}</span>
  </div>

  <h3 class="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
    {blog.title}
  </h3>

  <p class="flex-1 text-sm text-muted-foreground line-clamp-3">
    {blog.content.slice(0, 160).trim()}{blog.content.length > 160 ? '…' : ''}
  </p>

  <div class="mt-4 flex items-center justify-end border-t border-border pt-3">
    <span class="text-xs text-muted-foreground">{formatDate(blog.createdAt)}</span>
  </div>
</a>
