# GRFF — Development Guide

## Overview

This repo follows a **microfrontend architecture** using an NX monorepo with pnpm workspaces. Each frontend app is an independently deployable Svelte SPA that can also be consumed at runtime by a future host shell via Module Federation.

```
grff_repo/
├── apps/
│   ├── blog-app/        Svelte SPA — port 4201
│   └── profile-app/     Svelte SPA — port 4202
├── auth-app/            Next.js app — port 3000
└── backend/             Express API — port 5000
```

---

## Prerequisites

| Tool | Version | Install |
|------|---------|---------|
| Node.js | 18 or higher | https://nodejs.org |
| pnpm | 9 or higher | `npm i -g pnpm` |

---

## First-time Setup

Run once from the repo root:

```bash
pnpm install
```

This installs dependencies for all workspace packages (`blog-app`, `profile-app`) and the NX tooling in one step.

---

## Running the Apps

All commands are run from the **repo root**.

### Blog App (port 4201)

```bash
pnpm nx serve blog-app
```

Open [http://localhost:4201](http://localhost:4201)

Routes:
- `/` — Home, latest articles
- `/#/blog` — All articles with search
- `/#/blog/:id` — Article detail page

### Profile App (port 4202)

```bash
pnpm nx serve profile-app
```

Open [http://localhost:4202](http://localhost:4202)

Routes:
- `/` — Profile view (avatar, stats, skills)
- `/#/settings` — Edit profile form

### Auth App (port 3000)

```bash
cd auth-app
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend API (port 5000)

```bash
cd backend
npm run dev
```

---

## Building for Production

```bash
# Build a single app
pnpm nx build blog-app
pnpm nx build profile-app

# Build all apps in parallel
pnpm nx run-many -t build

# Preview a production build locally
pnpm nx preview blog-app
pnpm nx preview profile-app
```

Build output is written to `apps/<app-name>/dist/`.

Each build produces a `remoteEntry.js` alongside the normal SPA assets — this is the Module Federation entry point used by the host shell.

---

## NX Useful Commands

```bash
# Show all projects in the workspace
pnpm nx show projects

# Show available targets for an app
pnpm nx show project blog-app

# View the project dependency graph in the browser
pnpm nx graph

# Run a target only on projects affected by your changes
pnpm nx affected -t build
```

---

## Architecture: Microfrontend Setup

Each Svelte app is set up as a **Module Federation remote**:

| App | Federation name | Exposed entry | Remote URL (dev) |
|-----|----------------|---------------|-----------------|
| blog-app | `blog_app` | `./App` | `http://localhost:4201/remoteEntry.js` |
| profile-app | `profile_app` | `./App` | `http://localhost:4202/remoteEntry.js` |

When a **host shell** is added later, it only needs to declare these remotes in its `vite.config.ts`:

```ts
federation({
  name: 'host',
  remotes: {
    blog_app:    { type: 'module', entry: 'http://localhost:4201/remoteEntry.js' },
    profile_app: { type: 'module', entry: 'http://localhost:4202/remoteEntry.js' },
  },
  shared: ['svelte'],
})
```

No changes to `blog-app` or `profile-app` are needed.

---

## Design System

All apps import the shared design system via a single CSS line:

```css
@import "tailwind-design-system";
```

This gives every app the same colour tokens (`bg-background`, `text-foreground`, `text-primary`, `bg-surface`, `border-border`, etc.) ensuring a consistent look and feel without any runtime overhead.

The package is `tailwind-design-system` on npm and requires Tailwind CSS v4.

---

## Adding a New App to the Workspace

1. Create the app directory: `apps/<new-app>/`
2. Add a `package.json` with `"name": "@grff/<new-app>"`
3. Add a `vite.config.ts` with the Svelte + Tailwind + Federation plugins
4. Add a `project.json` so NX registers it
5. Run `pnpm install` from the repo root — pnpm picks it up automatically

NX will auto-detect the new app's `vite.config.ts` and wire up `build`, `serve`, and `preview` targets with no manual configuration needed.
