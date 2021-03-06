export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: `%s | ${process.env.SITE_NAME}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/global.scss',
    '@/assets/css/keyframes.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc : https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    // Doc: https://github.com/rigor789/vue-scrollto
    [
      'vue-scrollto/nuxt', {
        container: 'body',
        duration: 750,
        easing: 'ease-out',
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
      }
    ],
    // Doc: https://firebase.nuxtjs.org/guide/getting-started/
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: process.env.API_KEY,
          authDomain: process.env.AUTH_DOMAIN,
          databaseURL: process.env.DATABASE_URL,
          projectId: process.env.PROJECT_ID,
          storageBucket: process.env.STORAGE_BUCKET,
          messagingSenderId: process.env.MESSAGING_SENDER_ID,
          appId: process.env.APP_ID,
          measurementId: process.env.MEASUREMENT_ID
        },
        services: {
          firestore: true,
          realtimeDb: true,
          messaging: true,
          performance: true,
          analytics: true
        }
      }
    ],
    // Doc: https://sweetalert2.github.io/
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#08a5e1',
        cancelButtonColor: '#e5e5e5'
      }
    ]
  ],
  i18n: {
    locales: [
      {
        name: 'Français',
        code: 'fr',
        iso: 'fr-FR',
        file: 'fr-FR.json'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.json'
      }
    ],
    langDir: 'locales/',
    defaultLocale: 'fr',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'fr',
      messages: {
        fr: require('./locales/fr-FR.json'),
        en: require('./locales/en-US.json')
      }
    }
  },
  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faLongArrowAltRight', 'faMapMarkerAlt', 'faTag'],
      regular: ['faBuilding', 'faCalendarAlt', 'faAddressCard'],
      brands: ['faTwitter', 'faLinkedin', 'faGithub', 'faMedium']
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
};
