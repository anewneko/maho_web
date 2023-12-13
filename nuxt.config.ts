// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    },

  },
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1",
        },
        {
          "charset": "utf-8"
        },
      ],
      "link": [{ rel: 'icon', type: 'image/x-icon', href: '/mahoIcon.ico' }],
      "style": [],
      "script": [],
      "noscript": [],
      "title": "Maho_robot"
    },


  },
  css: [
    '~/assets/css/global.css'
  ],
  modules: [
    '@element-plus/nuxt'
  ]


})
