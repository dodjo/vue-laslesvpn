import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader';
import path from 'path';

// https://vite.dev/config/

console.log(path.resolve(__dirname, 'src'))
export default defineConfig({
  base: '/',
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
})
