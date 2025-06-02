import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
}); 