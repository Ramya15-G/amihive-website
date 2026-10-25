import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@artifacts': 'C:/Users/Ramya/.gemini/antigravity/brain/4fdccd94-1cd5-4f57-9e10-76e2b48f0c46',
    },
  },
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/Ramya/.gemini/antigravity/brain/4fdccd94-1cd5-4f57-9e10-76e2b48f0c46',
      ],
    },
  },
})
