// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '',
    // Keys within public are also exposed client-side
    public: {
      runType: process.env.Status,
      discordLogin4dev : 'https://discord.com/oauth2/authorize?client_id=655407600325754908&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2FmahoBotServer%2Fredirect%2Fmahoweb%2Fhomepage&scope=identify+email',
      discordLogin4prod : 'https://discord.com/oauth2/authorize?client_id=655407600325754908&response_type=code&redirect_uri=https%3A%2F%2Fserv.mahorobo.org%2FmahoBotServer%2Fredirect%2Fmahoweb%2Fhomepage&scope=identify+email',
    },
  },
  routeRules: {
    '/api/**': {
      proxy:  process.env.Status == 'dev' ? 'http://localhost:8081/mahoBotServer/**' : 'https://serv.mahorobo.org/mahoBotServer/**'
    }
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
    pageTransition: { name: 'page', mode: 'out-in' }
    
  },
  css: [
    '~/assets/css/global.css', '~/assets/css/elementPlus.css', 'element-plus/dist/index.css'
  ],
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  elementPlus: {
    themes: ['dark'],
    icon: 'ElIcon'
  },
})
