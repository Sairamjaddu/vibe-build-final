import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        about: resolve(__dirname, 'about.html'),
        blogs: resolve(__dirname, 'blogs.html'),
        contact: resolve(__dirname, 'contact.html'),
        aiAutomation: resolve(__dirname, 'AI Automation.html'),
        chatbots: resolve(__dirname, 'Chatbots.html'),
        digitalMarketing: resolve(__dirname, 'Vibe Marketing.html'),
        webApplication: resolve(__dirname, 'Web Application.html'),
        websiteDevelopment: resolve(__dirname, 'Website Development.html')
      },
    },
  },
  publicDir: 'public',
  server: {
    port: 3000
  }
})