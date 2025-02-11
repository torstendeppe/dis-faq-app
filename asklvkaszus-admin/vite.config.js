import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Progressive Web App Configuration
      manifest: '/manifest.json',
      registerType: 'autoUpdate',
      includeAssets: ['/main_icon.png']
    })
  ],
  server: {
    host: '10.30.1.38',
    port: 3006
  },
})
