import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const HOST = process.env.VITE_SERVER_HOST

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: HOST,
        changeOrigin: true,
        secure: false
      },
      '/hackathon/api': {
        target: HOST,
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/hackathon/, '')
      }
    }
  }
})
