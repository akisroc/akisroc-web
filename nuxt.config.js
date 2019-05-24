module.exports = {
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    ['nuxt-i18n', {
      locales: [{code: 'fr', iso: 'fr-FR'}, {code: 'en', iso: 'en-EN'}],
      defaultLocale: 'fr',
      vueI18n: {
        fallbackLocale: 'fr',
        messages: {
          fr: {
            homepage: 'Page d\'accueil',
          },
          en: {
            homepage: 'Homepage'
          }
        },
      }
    }]
  ],

  axios: {
    baseURL: 'http://localhost:8000'
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/login', method: 'POST', propertyName: 'token' },
          logout: { url: '/logout', method: 'POST' },
          user: { url: '/me', method: 'GET', propertyName: false }
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/'
    }
  },

  toast: {
    position: 'bottom-right',
    duration: 500,
    keepOnHover: true
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'akisroc-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Akisroc website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   ** CSS
   */
  css: [
    '~/assets/main.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

