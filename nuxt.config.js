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
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
          apiKey: 'AIzaSyBYyNzxsEt8mqo0yulPzk5lm6T6XuYe2L0',
          authDomain: 'my-portfolio-a3cd1.firebaseapp.com',
          databaseURL: 'https://my-portfolio-a3cd1.firebaseio.com',
          projectId: 'my-portfolio-a3cd1',
          storageBucket: 'my-portfolio-a3cd1.appspot.com',
          messagingSenderId: '505213614131',
          appId: '1:505213614131:web:30c0371934418755fbcb46',
          measurementId: 'G-RBLLLW1GMH'
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
      solid: ['faLongArrowAltRight'],
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
