import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  server: {
    port: 4201,
    cors: true,
    proxy: {
      "/api/blog/stream": {
        target: "http://localhost:5000",
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on("proxyRes", (proxyRes) => {
            proxyRes.headers["x-accel-buffering"] = "no";
            proxyRes.headers["cache-control"] = "no-cache";
          });
        },
      },
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
