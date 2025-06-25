import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vite handles SPA fallback automatically when using plugin-react
  // But if needed explicitly:
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
});
