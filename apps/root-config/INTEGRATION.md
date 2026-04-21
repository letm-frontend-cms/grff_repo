# Integrating a new micro-app into root-config

## Steps

### 1. Add Tailwind source scanning

In `apps/root-config/src/styles.css`, add a `@source` directive pointing to the new app's source files so Tailwind generates the CSS utilities it uses:

```css
@source "../../your-app/src/**/*.tsx";   /* React/Preact */
@source "../../your-app/src/**/*.svelte"; /* Svelte */
```

### 2. Add a mount container in `index.html`

Add a `<div>` inside `<main>` for single-spa to mount the app into:

```html
<main>
  ...existing apps...
  <div id="single-spa-application:your-app"></div>
</main>
```

### 3. Register the app in `src/main.ts`

Add the dev server URL and register the application:

```ts
const APP_URLS: Record<string, string> = {
  ...existing entries...
  yourApp: import.meta.env.VITE_YOUR_APP_URL ?? 'http://localhost:<port>',
};

registerApplication({
  name: 'your-app',
  app: () => import(/* @vite-ignore */ `${APP_URLS.yourApp}/src/single-spa-entry.ts`),
  activeWhen: (location) => location.pathname.startsWith('/your-route'),
});
```

### 4. Create a single-spa entry in the new app

Export `bootstrap`, `mount`, and `unmount` lifecycle functions. Do **not** import Tailwind CSS — root-config provides it globally.

See `apps/grff-courses/src/single-spa-entry.ts` (Preact) or `apps/grff-homepage/src/single-spa-entry.ts` (Svelte 5) for examples.

### 5. Pin the dev server port

In the new app's `vite.config`, set a fixed port with `cors: true`:

```ts
server: {
  port: <unique-port>,
  cors: true,
}
```

Current port assignments:

| App | Port |
|-----|------|
| root-config | 9000 |
| nav-app | 9001 |
| grff-homepage | 5173 |
| grff-courses | 5174 |
| blog-app | 4201 |
| profile-app | 4202 |

### 6. Add the route to `knownRoutes` in `src/main.ts`

This is used by the 404 page. If the route isn't listed, users will see "Page not found":

```ts
const knownRoutes = ['/', '/courses', '/your-route'];
```

### 7. Add a dev script to root `package.json`

```json
"dev:your-app": "pnpm --filter your-app dev"
```
