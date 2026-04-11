<script lang="ts">
  import BlogCard from '../components/BlogCard.svelte';
  import { MOCK_POSTS } from '../lib/mock-data';
</script>

<section>
  <div class="mb-8">
    <h1 class="text-4xl font-bold text-foreground">Welcome to GRFF Blog</h1>
    <p class="mt-2 text-lg text-muted-foreground">
      Insights, tutorials and stories from our community.
    </p>
  </div>

  <h2 class="mb-4 text-2xl font-semibold text-foreground">Latest Articles</h2>
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each MOCK_POSTS as post (post.id)}
      <BlogCard {post} />
    {/each}
  </div>
</section>
