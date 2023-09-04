import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    // 'bootstrap/dist/css/bootstrap.rtl.min.css',
    'vuetify/styles',
    '@/assets/style.css'
  ],
  app: {
    head:{
      htmlAttrs:{
        dir:'ltr'
      }  
    }
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetify()
      ))
    }
  ]
})
