// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,  
  compatibilityDate: '2024-11-01',  
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
