import { registerApplication, start, addErrorHandler, getAppNames } from 'single-spa';

const APP_URLS: Record<string, string> = {
  navApp: import.meta.env.VITE_NAV_URL ?? 'http://localhost:9001',
  homepage: import.meta.env.VITE_HOMEPAGE_URL ?? 'http://localhost:5173',
  courses: import.meta.env.VITE_COURSES_URL ?? 'http://localhost:5174',
  auth: import.meta.env.VITE_AUTH_URL ?? 'http://localhost:3000',
  profile: import.meta.env.VITE_PROFILE_URL ?? 'http://localhost:4202',
  blogApp: import.meta.env.VITE_BLOG_URL ?? 'http://localhost:4201',
};

const AUTH_ROUTES = new Set([
  '/login',
  '/signup',
  '/verify-email',
  '/forgot-password',
  '/reset-password',
  '/dashboard',
]);

const knownRoutes = ['/', '/courses', '/profile', '/settings', '/blog', ...AUTH_ROUTES];

registerApplication({
  name: 'nav-app',
  app: () => import(/* @vite-ignore */ `${APP_URLS.navApp}/src/single-spa-entry.tsx`),
  activeWhen: () => true,
});

registerApplication({
  name: 'homepage',
  app: () => import(/* @vite-ignore */ `${APP_URLS.homepage}/src/single-spa-entry.ts`),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: 'courses',
  app: () => import(/* @vite-ignore */ `${APP_URLS.courses}/src/single-spa-entry.ts`),
  activeWhen: (location) => location.pathname.startsWith('/courses'),
});

registerApplication({
  name: 'auth-app',
  app: () => import(/* @vite-ignore */ `${APP_URLS.auth}/spa/auth-app.esm.js`),
  activeWhen: (location) => AUTH_ROUTES.has(location.pathname),
});

registerApplication({
  name: 'profile-app',
  app: () => import(/* @vite-ignore */ `${APP_URLS.profile}/src/single-spa-entry.ts`),
  activeWhen: (location) => location.pathname.startsWith('/profile') || location.pathname.startsWith('/settings'),
});

registerApplication({
  name: 'blog-app',
  app: () => import(/* @vite-ignore */ `${APP_URLS.blogApp}/src/single-spa-entry.ts`),
  activeWhen: (location) => location.pathname.startsWith('/blog'),
});

addErrorHandler((err) => {
  const appName = (err as any).appOrParcelName ?? 'Unknown app';
  console.error(`[root-config] ${appName} failed to load`, err);
  showErrorOverlay(appName);
});

function showErrorOverlay(appName: string) {
  const container = document.getElementById(`single-spa-application:${appName}`);
  if (!container) return;
  container.innerHTML = `
    <div class="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
      <div class="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
      </div>
      <h2 class="text-xl font-bold text-white">Failed to load ${appName}</h2>
      <p class="max-w-md text-sm text-gray-400">The application couldn't be loaded. Make sure the dev server is running and try again.</p>
      <button onclick="window.location.reload()" class="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-2 text-sm font-medium text-white shadow-lg">
        Retry
      </button>
    </div>
  `;
}

function handleNotFound() {
  const notFoundEl = document.getElementById('not-found')!;

  function checkRoute() {
    const path = window.location.pathname;
    const isKnown = knownRoutes.some(
      (route) => path === route || (route !== '/' && path.startsWith(route)),
    );
    notFoundEl.style.display = isKnown ? 'none' : 'block';
  }

  window.addEventListener('single-spa:routing-event', checkRoute);
  checkRoute();
}

start();
handleNotFound();
