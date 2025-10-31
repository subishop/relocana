import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is a proxy for local development so API calls work.
  // Vercel will handle this automatically in production.
  server: {
    proxy: {
      '/api/': 'http://localhost:3000'
    }
  }
})
