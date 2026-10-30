import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
    proxy: {
      '/api': {
        target: 'https://api-inventario-ale-fcdhb0brcahmb4dy.westus3-01.azurewebsites.net',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
