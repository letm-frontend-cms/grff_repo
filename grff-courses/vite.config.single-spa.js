import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), preact()],
  build: {
    lib: {
      entry: 'src/single-spa-entry.js',
      name: 'grff-courses',
      fileName: 'grff-courses',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['single-spa'],
    },
  },
})
