import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    base: '/portfolio/'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Akinori's Portfolio",
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // ファビコン
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: 'https://akinori99.github.io/portfolio/favicon.svg',
      },
      {
        rel: 'icon alternate',
        type: 'image/png',
        href: 'https://akinori99.github.io/portfolio/favicon.png',
      },
      // リセットCSS(Rester.css)
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/gh/krishdevdb/reseter.css/css/reseter.min.css',
      },
      // フォント管理(GoogleFonts)
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      // Pinyon Script
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap',
      },
      // Shippori Mincho B1
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/common.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/_variable.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
