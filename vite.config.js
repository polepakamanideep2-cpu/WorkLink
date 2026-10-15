import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: true,
    host: true,
    port: 5173,
  },
  server: {
    allowedHosts: true,
    host: true,
    port: 5173,
  }
})
