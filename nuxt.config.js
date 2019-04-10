const pkg = require('./package')

let axios = {
  proxy: true
}
module.exports = {
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  proxy: {
    '/person': 'http://yapi.demo.qunar.com/mock/68007'
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
    src: '~/plugins/axios'
  }, ],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],

  /*
   ** Build configuration
   */
  build: {
    //打包路径
    publicPath:"https://lyh-l.github.io/blog/dist/",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  },
  axios
}
