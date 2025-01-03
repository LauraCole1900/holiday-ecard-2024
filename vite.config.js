import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/holiday-ecard-2024/',
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
