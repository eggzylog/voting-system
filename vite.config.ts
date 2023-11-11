import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

const HOST = 'http://178.128.20.38:8080'

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
