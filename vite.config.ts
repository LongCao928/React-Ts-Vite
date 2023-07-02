import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {}
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    host: 'localhost',
    port: 5173,
    open: true,
    proxy: {
      '/foo': 'http://localhost:4567',
    },
    watch: {
      ignored: ['!**/node_modules/your-package-name/**']
    }
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: 'inline',
    rollupOptions: {},
    manifest: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 500
  },
  preview: {
    host: 'localhost',
    port: 4173,
    open: true,
    proxy: {},
  }
})
