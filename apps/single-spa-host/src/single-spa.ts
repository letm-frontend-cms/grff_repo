import { registerApplication, start, type LifeCycles } from "single-spa";

type SystemJs = {
  import: <T = LifeCycles>(moduleName: string) => Promise<T>;
};

const AUTH_ROUTES = new Set([
  "/login",
  "/signup",
  "/verify-email",
  "/forgot-password",
  "/reset-password",
  "/dashboard",
]);

function getSystem(): SystemJs {
  const system = (window as Window & { System?: SystemJs }).System;
  if (!system) {
    throw new Error("SystemJS is not loaded. Ensure system.min.js is included in index.html.");
  }
  return system;
}

function loadApp(moduleName: string): Promise<LifeCycles> {
  return getSystem().import<LifeCycles>(moduleName);
}

export function setupSingleSpa(): void {
  registerApplication({
    name: "grff-auth",
    app: () => loadApp("grff-auth"),
    activeWhen: (location) => AUTH_ROUTES.has(location.pathname),
  });

  registerApplication({
    name: "home-app",
    app: () => loadApp("home-app"),
    activeWhen: (location) => !AUTH_ROUTES.has(location.pathname),
  });

  start({
    urlRerouteOnly: true,
  });
}
