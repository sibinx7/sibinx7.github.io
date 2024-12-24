// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from "dotenv";
dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
export default defineNuxtConfig({
  ssr: true,  
  content: {
    experimental: {
      clientDB: true
    }
  },
  compatibilityDate: '2024-11-01',
  css: [
    '~/node_modules/bootstrap/scss/bootstrap.scss',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.scss',
    '~/node_modules/prismjs/themes/prism-okaidia.css',
    '~/assets/scss/main.scss',
  ],
  hooks: {
    'prerender:routes' ({ routes}){
      // routes.clear()
    }
  }, 
  modules: [
    '@pinia/nuxt',
    '@nuxt/content'
  ],
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
  app: {
    buildAssetsDir: `${isProduction ? 'assets' : '_nuxt'}`,
  }
})