<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
</script>

<div class="flex min-h-screen flex-col bg-background text-foreground">
  <header class="border-b border-border bg-surface px-6 py-4">
    <div class="mx-auto flex max-w-5xl items-center justify-between">
      <a href="#/" class="text-xl font-bold text-primary">GRFF Blog</a>
      <nav class="flex gap-4 text-sm">
        <a href="#/" class="text-muted-foreground hover:text-foreground transition-colors">Home</a>
        <a href="#/blog" class="text-muted-foreground hover:text-foreground transition-colors">Articles</a>
      </nav>
    </div>
  </header>

  <main class="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
    <Router {routes} />
  </main>

  <footer class="border-t border-border bg-surface px-6 py-6 text-center text-sm text-muted-foreground">
    &copy; {new Date().getFullYear()} GRFF &mdash; Blog
  </footer>
</div>
