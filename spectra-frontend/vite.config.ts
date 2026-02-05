import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // Use root base on Vercel so built assets are referenced at `/`.
  // Preserve `/spectra/` for other environments (e.g., GitHub Pages).
  base: process.env.VERCEL ? '/' : '/spectra/',
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "bulma/sass/utilities/initial-variables";
          @use "bulma/sass/utilities/functions";
          @use "bulma/sass/utilities/mixins" as mixins;

          @use "@/assets/scss/_custom-mixins.scss" as custom-mixins;
          @use "@/assets/scss/_color-variants.scss" as color-variants;

          @use "@/assets/scss/_variables.scss" as *;
        `,
      },
    },
  },
})
