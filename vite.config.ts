import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

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
      '/api/v1': {
        target: 'http://178.128.20.38:8080',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
