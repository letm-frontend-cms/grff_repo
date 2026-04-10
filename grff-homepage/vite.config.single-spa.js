import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  build: {
    lib: {
      entry: 'src/single-spa-entry.js',
      name: 'grff-homepage',
      fileName: 'grff-homepage',
      formats: ['system'],
    },
    rollupOptions: {
      external: ['single-spa'],
    },
  },
});
