import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/maker-club-web/', // Replace with your repository name if different
  plugins: [react()],
})
