export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  pageTransition: 'intro',

  router: {
    linkActiveClass: 'bg-gray-900 text-white',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'screens',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'vuejs-google-maps/nuxt',
  ],

  googleMaps: {
    apiKey: ''
  },
  googleFonts: {
    families: {
      Inter: {
        wght: [400, 600, 800],
      },
    }
  },

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': { target: 'https://example.com', pathRewrite: {'^/api/': ''} }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
