import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import elsint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), elsint()],
})
