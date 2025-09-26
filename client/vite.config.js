import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      // this means all the req with '/api' add this 'http://localhost:3000' part before it 
      '/api': {
        target: 'http://localhost:3000',
        secure:false,
      }
    }
  },
  plugins: [react(), tailwindcss()],
})
