import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'homepage',
  app: () => import(/* @vite-ignore */ 'http://localhost:5173/src/single-spa-entry.js'),
  activeWhen: (location) => location.pathname === '/'
});

registerApplication({
  name: 'courses',
  app: () => import(/* @vite-ignore */ 'http://localhost:5174/src/single-spa-entry.js'),
  activeWhen: (location) => location.pathname.startsWith('/courses')
});

start();