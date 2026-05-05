import { federation } from "@module-federation/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte(),
    federation({
      name: "blog_app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.svelte",
      },
      shared: ["svelte"],
    }),
  ],
  server: {
    port: 4201,
    cors: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  preview: {
    port: 4201,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
