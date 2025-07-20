import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      },
    },
    minify: 'terser',
    reportCompressedSize: true,
    sourcemap: false,
  },
  server: {
    port: 3001,
    host: '0.0.0.0',
    strictPort: false,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  },
  preview: {
    port: 4173,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
    },
  },
});