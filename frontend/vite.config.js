import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Food-Delivery-Site/',
  plugins: [react()],
  server: { port: 4000 },
  build: { outDir: '.' // This ensures the build output goes to the root directory 
  }
})
