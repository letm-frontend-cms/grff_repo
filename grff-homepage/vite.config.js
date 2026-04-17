// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [tailwindcss(), sveltekit()],
//   server: {
//     cors: true
//   }
// });
export default {
  build: {
    lib: {
      entry: 'src/single-spa-entry.js',
      format: 'esm'
    }
  },
  server: {
    cors: true
  }
};