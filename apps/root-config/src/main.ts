import { registerApplication, start } from 'single-spa';

const APP_URLS: Record<string, string> = {
  navApp: import.meta.env.VITE_NAV_URL ?? 'http://localhost:9001',
  homepage: import.meta.env.VITE_HOMEPAGE_URL ?? 'http://localhost:5173',
  courses: import.meta.env.VITE_COURSES_URL ?? 'http://localhost:5174',
};

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

start();
