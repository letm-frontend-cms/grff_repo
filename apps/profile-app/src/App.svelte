<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
</script>

<div class="min-h-screen bg-background text-foreground">
  <header class="border-b border-border bg-surface px-6 py-4">
    <div class="mx-auto flex max-w-3xl items-center justify-between">
      <a href="/#/" class="text-xl font-bold text-primary">GRFF Profile</a>
      <nav class="flex gap-4 text-sm">
        <a href="/#/" class="text-muted-foreground hover:text-foreground transition-colors">My Profile</a>
        <a href="/#/settings" class="text-muted-foreground hover:text-foreground transition-colors">Settings</a>
      </nav>
    </div>
  </header>

  <main class="mx-auto max-w-3xl px-6 py-10">
    <Router {routes} />
  </main>

  <footer class="border-t border-border bg-surface px-6 py-6 text-center text-sm text-muted-foreground">
    &copy; {new Date().getFullYear()} GRFF &mdash; Profile
  </footer>
</div>
