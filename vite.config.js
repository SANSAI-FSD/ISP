// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',       // default output folder
    sourcemap: false,     // disable sourcemaps for production
    rollupOptions: {
      // optional: if you have external dependencies you want to exclude
      external: [],
    },
  },
  server: {
    port: 3000,           // local dev port
    open: true,           // open browser on start
  },
});
