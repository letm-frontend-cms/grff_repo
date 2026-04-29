import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  resolve: {
    alias: {
      $lib: path.resolve('src/lib'),
    },
  },
  build: {
    lib: {
      entry: 'src/single-spa-entry.ts',
      name: 'grff-homepage',
      fileName: 'grff-homepage',
      formats: ['system'],
    },
    rollupOptions: {
      external: ['single-spa'],
    },
  },
});
