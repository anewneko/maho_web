// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: 'http://localhost:8080/mahoBotServer'
    },

  },
  app: {
    head: {
      "meta": [
        {
          "name": "",
          "content": "",
        },
        {
          "charset": "utf-8"
        },
      ],
      "link": [{ rel: 'icon', type: 'image/x-icon', href: '/mahoIcon.ico' }],
      "style": [],
      "script": [],
      "noscript": [],
      "title": "マホロボ"
    },


  },
  css: [
    '~/assets/css/global.css', '~/assets/css/elementPlus.css', 'element-plus/dist/index.css'
  ],
  modules: [
    '@element-plus/nuxt',
  ],
  elementPlus: {
    themes: ['dark'],
    icon: 'ElIcon'
  }

})
