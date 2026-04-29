# single-spa-host

Single-domain shell host using Single-SPA orchestration.

## What this does

- Keeps user on one host domain (default: http://localhost:3020)
- Uses `single-spa` route orchestration with `System.import(...)`
- Registers apps by lifecycle name (`grff-auth`, `home-app`) via import map
- Auth routes (`/login`, `/signup`, `/verify-email`, `/forgot-password`, `/reset-password`, `/dashboard`) activate `grff-auth`
- All other routes activate `home-app`

## Setup

1. Install dependencies:
   - `npm install`
2. Start shell:
   - `npm run dev`
3. Build real lifecycle bundles from app source:
   - `npm run build:mf`
4. Ensure lifecycle bundles are reachable at:
   - `http://localhost:3000/spa/grff-auth.js`
   - `http://localhost:3002/spa/home-app.js`

## Lifecycle contract for each app

Each microfrontend must export `bootstrap`, `mount`, and `unmount`.

```tsx
import ReactDOM from "react-dom/client";
import App from "./App";

let root: ReactDOM.Root | null = null;

export async function bootstrap() {}

export async function mount() {
  const container = document.getElementById("mf-root");
  if (!container) throw new Error("mf-root not found");
  root = ReactDOM.createRoot(container);
  root.render(<App />);
}

export async function unmount() {
  root?.unmount();
  root = null;
}
```

## Import map

Edit the import map in [index.html](index.html) if your lifecycle bundle URLs differ.

## Source mapping

- homepage lifecycle source: [../homepage-app/spa/lifecycle.tsx](../homepage-app/spa/lifecycle.tsx)
- auth lifecycle source: [../grff-auth/spa/lifecycle.tsx](../grff-auth/spa/lifecycle.tsx)
- auth next shims: [../grff-auth/spa/shims/next-navigation.ts](../grff-auth/spa/shims/next-navigation.ts), [../grff-auth/spa/shims/next-link.tsx](../grff-auth/spa/shims/next-link.tsx)
