<script lang="ts">
  import BlogCard from '../components/BlogCard.svelte';
  import { MOCK_POSTS } from '../lib/mock-data';

  let search = $state('');

  const filtered = $derived(
    MOCK_POSTS.filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase()),
    ),
  );
</script>

<section>
  <div class="mb-8">
    <h1 class="text-3xl font-bold text-foreground">All Articles</h1>
    <p class="mt-1 text-muted-foreground">{MOCK_POSTS.length} articles published</p>
  </div>

  <div class="mb-6">
    <input
      type="search"
      bind:value={search}
      placeholder="Search articles…"
      class="w-full rounded-lg border border-border bg-surface px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>

  {#if filtered.length === 0}
    <p class="text-muted-foreground">No articles match your search.</p>
  {:else}
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each filtered as post (post.id)}
        <BlogCard {post} />
      {/each}
    </div>
  {/if}
</section>
