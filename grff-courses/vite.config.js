// import { defineConfig } from 'vite'
// import preact from '@preact/preset-vite'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [tailwindcss(), preact()],
  
//   server: {
//     cors: true
// }
// })

export default {
  build: {
    lib: {
      entry: 'src/single-spa-entry.tsx',
      format: 'esm'
    }
  },
  server: {
    cors: true
  }
};