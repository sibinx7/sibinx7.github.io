// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,  
  compatibilityDate: '2024-11-01',
  css: [
    '~/node_modules/bootstrap/scss/bootstrap.scss',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.scss',
    '~/assets/scss/main.scss',
  ],
  hooks: {
    'prerender:routes' ({ routes}){
      // routes.clear()
    }
  }, 
  modules: [
    '@pinia/nuxt'
  ],
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  }
})
