# Blog Admin Playwright Setup

## Install dependencies

From `apps/blog-admin-app`:

```bash
pnpm install
```

## Local Playwright tests

Run the local Playwright suite against the Vite app:

```bash
pnpm run test:e2e
```

Run tests in headed mode:

```bash
pnpm run test:e2e:headed
```

The Playwright config starts a local Vite server on `http://localhost:4321` if one is not already running.

## TestMu / LambdaTest cloud tests

Use the cloud test command to execute the dedicated LambdaTest spec:

```bash
pnpm run test:e2e:cloud
```

This test uses `chromium.connect()` and a WebSocket endpoint configured from `LT_USERNAME` and `LT_ACCESS_KEY`.

## Add credentials

Create a local `.env` file or set environment variables directly:

```env
LT_USERNAME=your-lt-username
LT_ACCESS_KEY=your-lt-access-key
```

Do not commit your real credentials. The repository includes `.env.example` as a template.

## LambdaTest / TestMu tunnel usage

If the cloud runner cannot reach `http://localhost:5173` directly, start a LambdaTest tunnel or other local tunnel service before running `pnpm run test:e2e:cloud`.

## Notes

- The cloud test uses the `Login Test` capability name and the `Vite App Build` build name.
- Local tests are configured to run from `./tests` and use modern TypeScript support through Playwright.
