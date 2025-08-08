import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React libraries
          vendor: ['react', 'react-dom'],
          
          // Router and navigation
          router: ['react-router-dom'],
          
          // Form handling
          forms: ['react-hook-form'],
          
          // Animations
          animations: ['framer-motion'],
          
          // SEO and meta
          seo: ['react-helmet-async'],
          
          // Utilities
          utils: ['clsx', 'tailwind-merge'],
        },
        
        // Optimize chunk names
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? 
            chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        
        // Optimize asset names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext || '')) {
            return `images/[name]-[hash][extname]`;
          }
          
          if (/css/i.test(ext || '')) {
            return `css/[name]-[hash][extname]`;
          }
          
          return `assets/[name]-[hash][extname]`;
        },
      }
    },
    
    // Terser options for better minification
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
      format: {
        comments: false,
      },
    },
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
  },
  
  // Optimize development server
  server: {
    host: true,
    port: 3000,
    hmr: {
      overlay: true,
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-hook-form',
      'framer-motion',
      'react-helmet-async',
      'clsx',
      'tailwind-merge',
    ],
    exclude: ['@vite/client', '@vite/env'],
  },
  
  // Preview server configuration
  preview: {
    port: 4173,
    host: true,
  },
})
