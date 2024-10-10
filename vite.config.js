import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio_Marknox/', // Add this line for GitHub Pages
})
