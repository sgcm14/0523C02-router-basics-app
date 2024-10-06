import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sgcm14.github.io/0523C02-router-basics-app/", // Ruta del repositorio
  // base:"/", // para local descomentar aqui y comentar arriba
  plugins: [react()],
})
