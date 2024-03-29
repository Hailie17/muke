import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import elsint from 'vite-plugin-eslint'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      plugins: {
        vue: vue(),
        // vueJsx: VueJsx(), // if needed
      },
    }),, elsint()],
})
