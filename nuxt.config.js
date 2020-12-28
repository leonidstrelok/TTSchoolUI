export default {
  env: {
    serverUrl: "https://mlcenter.us",
  },
  ssr: false,

  target: 'static',

  head: {
    title: 'Merv Learning Center',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    '~/plugins/axios'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/axios'
  ],

  modules: [
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },

  build: {
  }
}
