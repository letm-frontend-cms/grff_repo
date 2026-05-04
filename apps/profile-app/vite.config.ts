import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte(),
  ],
  server: {
    port: 4202,
    proxy: {
      "/api": {
        target: "https://grff-repo-backend.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  preview: {
    port: 4202,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
