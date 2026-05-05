<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
</script>

<div class="flex min-h-screen flex-col bg-background text-foreground">
  <main class="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
    <Router {routes} />
  </main>

  <footer class="border-t border-border bg-surface px-6 py-6 text-center text-sm text-muted-foreground">
    &copy; {new Date().getFullYear()} GRFF &mdash; Blog
  </footer>
</div>
