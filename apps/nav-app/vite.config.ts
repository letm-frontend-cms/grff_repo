import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  build: {
    lib: {
      entry: 'src/single-spa-entry.tsx',
      formats: ['es'],
      fileName: 'nav-app',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-dom/client'],
    },
  },
  server: {
    port: 9001,
    cors: true,
  },
});
