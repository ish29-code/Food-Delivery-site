import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 base: '/Food-Delivery-Site/',
  plugins: [react()],
  server: { port: 5173 },
  build: { outDir: 'docs' // This ensures the build output goes to the root directory 
           rollupOptions: { 
              external: ['/Food-Delivery-Site/assets/index-UirRUTxs.js'], // Add external modules here 
     },
  },
});
