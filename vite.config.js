import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',  // Automatically updates service worker
      manifest: {
        name: 'Weather App',
        short_name: 'Weather',
        description: 'A simple weather app built with React',
        theme_color: '#0ea5e9',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/weatherlogo.png',  // Make sure the icon is in the 'public' folder
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/weatherlogo.png',  // Another icon size for higher resolution devices
            sizes: '512x512',
            type: 'image/png',
          },
        ]
      }
    })
  ]
})
