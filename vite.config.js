import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "arsalan-wani",
    project: "portfolio"
  })],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for the src directory
    },
  },

  build: {
    sourcemap: true
  }
})