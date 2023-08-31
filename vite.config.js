import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'bundle.js': ['./src/main.jsx'],
          'styles.css': ['./src/index.css'],
        },
      },
    },
  },
})

