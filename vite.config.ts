import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const HOST = process.env.VITE_SERVER_HOST

  return defineConfig({
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
}
