<script lang="ts">
  import { navigateToUrl } from 'single-spa';
  import { House, BookOpen, FileText, User, Menu, X } from 'lucide-svelte';

  interface NavItem {
    label: string;
    icon: typeof House;
    href: string;
  }

  let { currentPath = window.location.pathname }: { currentPath?: string } = $props();
  let isOpen = $state(false);

  const navItems: NavItem[] = [
    { label: 'Home', icon: House, href: '/' },
    { label: 'Courses', icon: BookOpen, href: '/courses' },
    { label: 'Blogs', icon: FileText, href: '/blogs' },
    { label: 'Profile', icon: User, href: '/profile' }
  ];

  function isActive(href: string): boolean {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }

  function handleNavClick(event: MouseEvent) {
    navigateToUrl(event);
    isOpen = false;
  }
</script>

<nav class="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0614]/90 backdrop-blur-md">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
    <div class="flex items-center gap-3">
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 font-bold text-white sm:h-10 sm:w-10">
        G
      </div>
      <span class="text-lg font-bold text-violet-300 sm:text-xl">GRFF</span>
    </div>

    <div class="hidden items-center gap-4 md:flex">
      {#each navItems as item}
        <a
          href={item.href}
          onclick={handleNavClick}
          class={`flex items-center gap-2 rounded-xl px-4 py-2 transition ${
            isActive(item.href)
              ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
              : 'text-gray-300 hover:bg-white/5 hover:text-white'
          }`}
        >
          <item.icon class="h-4 w-4" />
          <span>{item.label}</span>
        </a>
      {/each}
    </div>

    <div class="hidden md:block">
      <button class="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-2 text-sm font-medium text-white shadow-lg sm:px-6 sm:text-base">
        Login
      </button>
    </div>

    <button
      class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
      onclick={() => (isOpen = !isOpen)}
      aria-label="Toggle menu"
    >
      {#if isOpen}
        <X class="h-5 w-5" />
      {:else}
        <Menu class="h-5 w-5" />
      {/if}
    </button>
  </div>

  {#if isOpen}
    <div class="border-t border-white/10 px-4 py-4 md:hidden">
      <div class="flex flex-col gap-3">
        {#each navItems as item}
          <a
            href={item.href}
            onclick={handleNavClick}
            class={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
              isActive(item.href)
                ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <item.icon class="h-4 w-4" />
            <span>{item.label}</span>
          </a>
        {/each}

        <button class="mt-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-5 py-3 font-medium text-white shadow-lg">
          Login
        </button>
      </div>
    </div>
  {/if}
</nav>