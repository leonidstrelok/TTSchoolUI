import colors from 'vuetify/es5/util/colors';
import path from "path";
import fs from "fs";
const config = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "config/urlConfig.json"))
);
export default {
  env: {
    serverUrl: config.serverUrl,
    localUrl: config.localUrl,
  },
  ssr: false,

  target: 'static',

  head: {
    titleTemplate: '%s - TurnOfStudy',
    title: 'TurnOfStudy',
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
  },
  router: {
    middleware: ['oidc-router', 'oidc-callback']
  }
}
