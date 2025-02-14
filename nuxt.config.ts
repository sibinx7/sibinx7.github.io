// https://nuxt.com/docs/api/configuration/nuxt-config
import dotenv from "dotenv";
dotenv.config();
const isProduction = process.env.NODE_ENV === "production";
export default defineNuxtConfig({
  ssr: true,  
  content: {
    documentDriven: false,
    experimental: {
      clientDB: true
    },
    ignores: [
      'images'
    ]
  },
  compatibilityDate: '2024-11-01',
  css: [
    '~/node_modules/bootstrap/scss/bootstrap.scss',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.scss',
    '~/node_modules/animate.css/animate.min.css',
    '~/node_modules/devicon/devicon.min.css',
    '~/node_modules/prismjs/themes/prism-okaidia.css',
    '~/assets/scss/main.scss',
  ],
  hooks: {
    'prerender:routes' ({ routes}){
      // routes.clear()
    },
    'nitro:build:public-assets': async (nuxt) => {
      const { output: { publicDir } } = nuxt.options
      const fs = require('fs')

      try {
        await fs.promises.writeFile(`${publicDir}/.nojekyll`, '')
        console.log('.nojekyll file created successfully in public directory.')
      } catch (error) {
        console.error('Error creating .nojekyll file:', error)
      }
    }
  }, 
  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/image',
  ],
  image: {
    provider: 'none'
  },
  devtools: { enabled: true },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/interviews',  '/about', '/services'],
      failOnError: false,
    }
  },
  app: {
    buildAssetsDir: `${isProduction ? 'assets' : '_nuxt'}`,
    head: {
      title: 'Sibin Xavier | Experienced Full-Stack Developer | React, Angular, Vue.js | Nuxt JS, Next JS, Middleman | React Native | Node.js, Express JS |Laravel | MongoDB/MySQL, Sequelize js | Passionate Mentor | YouTuber | Blogger'
    }
  },
})