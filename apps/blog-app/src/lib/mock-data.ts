export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
}

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Microfrontends',
    excerpt:
      'Learn how microfrontend architecture breaks large frontends into independently deployable apps, improving team autonomy and release velocity.',
    content:
      'Microfrontends extend the microservices philosophy to the frontend. Each team owns a vertical slice of the application — from database to UI — and deploys independently. This article walks through the core patterns: route-based splitting, module federation, and shared design systems.',
    author: 'Alex Johnson',
    date: 'Apr 5, 2026',
    category: 'Architecture',
    readTime: 6,
  },
  {
    id: '2',
    title: 'Building with Svelte 5 Runes',
    excerpt:
      "Svelte 5 introduces Runes — a new reactivity model that replaces the compiler-magic approach with explicit, fine-grained signals.",
    content:
      "Runes replace Svelte's implicit reactive declarations with explicit primitives: $state, $derived, $effect, and $props. This makes reactivity more predictable and composable, especially in larger applications where implicit rules could be surprising.",
    author: 'Maria Chen',
    date: 'Apr 3, 2026',
    category: 'Svelte',
    readTime: 5,
  },
  {
    id: '3',
    title: 'Tailwind v4 — What Changed',
    excerpt:
      'Tailwind CSS v4 ships a brand-new engine, CSS-first configuration, and a dedicated Vite plugin. No more tailwind.config.js.',
    content:
      'Tailwind v4 drops JavaScript configuration in favour of CSS custom properties and @theme directives defined directly in your CSS files. The new Oxide engine is significantly faster, and the @tailwindcss/vite plugin replaces the PostCSS setup, giving you instant HMR.',
    author: 'Sam Rivera',
    date: 'Apr 1, 2026',
    category: 'CSS',
    readTime: 4,
  },
  {
    id: '4',
    title: 'NX Monorepos for Teams',
    excerpt:
      'NX brings intelligent build caching, affected analysis, and task orchestration to any monorepo — regardless of the stack.',
    content:
      'Setting up NX in an existing repo is as simple as running nx init. NX infers targets from your existing config files (vite.config.ts, package.json scripts, etc.) and adds a computation cache on top. Affected analysis means only changed projects and their dependents are rebuilt on each CI run.',
    author: 'Jordan Lee',
    date: 'Mar 28, 2026',
    category: 'Tooling',
    readTime: 7,
  },
  {
    id: '5',
    title: 'Module Federation with Vite',
    excerpt:
      'The @module-federation/vite plugin brings runtime code sharing to Vite apps — enabling independently deployed remotes to compose into a single host shell.',
    content:
      'Module Federation lets you deploy micro-apps independently while the host shell loads them at runtime. With @module-federation/vite, each remote exposes a remoteEntry.js that the host can consume over HTTP. Shared libraries like Svelte are negotiated at runtime to avoid duplication.',
    author: 'Alex Johnson',
    date: 'Mar 25, 2026',
    category: 'Architecture',
    readTime: 8,
  },
  {
    id: '6',
    title: 'Design Systems Across Microfrontends',
    excerpt:
      'Keeping visual consistency across independently deployed apps is hard. A shared CSS-only design system published to npm is the simplest solution.',
    content:
      'CSS custom properties make it easy to ship a design system as a single importable CSS file. Each micro-app imports the system with @import "tailwind-design-system", inheriting the same colour tokens, spacing scale, and typography without runtime overhead.',
    author: 'Maria Chen',
    date: 'Mar 20, 2026',
    category: 'Design',
    readTime: 5,
  },
];
