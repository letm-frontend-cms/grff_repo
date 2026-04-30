import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// ESM lifecycle bundle for root-config (native import()).
// Kept separate from colleague's SystemJS bundle at public/spa/auth-app.js.
// CSS is provided by root-config's global stylesheet, not bundled here.
// Strips all .css imports — styling is handled by root-config's global stylesheet.
const stripCss = {
  name: "strip-css-imports",
  enforce: "pre" as const,
  resolveId(id: string) {
    if (id.endsWith(".css")) return "\0virtual:empty-css";
    return null;
  },
  load(id: string) {
    if (id === "\0virtual:empty-css") return "";
    return null;
  },
};

// Redirect imports of the src-level config (which hardcodes the prod API URL)
// to our local dev config for the ESM build.
const localConfig = path.resolve(__dirname, "./config.local.ts");
const srcConfig = path.resolve(__dirname, "../config.js");
const redirectConfig = {
  name: "redirect-config-to-local",
  enforce: "pre" as const,
  async resolveId(source: string, importer: string | undefined) {
    if (!importer) return null;
    if (!source.endsWith("/config") && !source.endsWith("/config.js")) return null;
    const resolved = path.resolve(path.dirname(importer), source);
    const candidates = [resolved, `${resolved}.js`, `${resolved}.ts`];
    if (candidates.includes(srcConfig)) return localConfig;
    return null;
  },
};

export default defineConfig({
  publicDir: false,
  plugins: [stripCss, redirectConfig, react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": "{}",
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "../src") },
      { find: "next/link", replacement: path.resolve(__dirname, "./shims/next-link.tsx") },
      { find: "next/navigation", replacement: path.resolve(__dirname, "./shims/next-navigation.ts") },
      { find: "grff-auth-lib/react", replacement: path.resolve(__dirname, "../../grff-auth-lib/src/react.ts") },
      { find: "grff-auth-lib", replacement: path.resolve(__dirname, "../../grff-auth-lib/src/index.ts") },
    ],
  },
  build: {
    outDir: path.resolve(__dirname, "../public/spa"),
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, "./lifecycle.tsx"),
      formats: ["es"],
      fileName: () => "auth-app.esm.js",
    },
    rollupOptions: {
      // React is bundled in — root-config loads this via native import() and
      // has no React of its own. Matches how nav-app/courses bundle their own
      // framework.
      output: {
        inlineDynamicImports: true,
      },
    },
    cssCodeSplit: false,
  },
});
