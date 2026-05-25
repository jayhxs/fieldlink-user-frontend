import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'suffering-semisweet-resize.ngrok-free.dev',
    ],
    proxy: {
      '/api': {
        target: 'https://suffering-semisweet-resize.ngrok-free.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          'ngrok-skip-browser-warning': '69420',
        },
      },
    },
  },
})