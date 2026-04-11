import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte(),
    federation({
      name: 'profile_app',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.svelte',
      },
      shared: ['svelte'],
    }),
  ],
  server: {
    port: 4202,
  },
  preview: {
    port: 4202,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
