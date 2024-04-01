export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mini Netflix Clone',
    htmlAttrs: {
      lang: 'en'
    },
    builder: 'webpack',
   
    build: {
      extend (config, { isDev, isClient }) {
        // ..
        config.module.rules.push(
          {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
            loader: 'file-loader'
          }
        )
        // Sets webpack's mode to development if `isDev` is true.
        if (isDev) { config.mode = 'development' }
      },
      splitChunks: {
        chunks: 'all',
      },
      minifyCSS: true,
      terser: {
        minify: true,
      },
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mini Netflix Clone with list of movies and movie details' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/n-logo.png' },
      {
        rel: 'preload',
        href: 'https://www.omdbapi.com',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css','~/assets/css/responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
