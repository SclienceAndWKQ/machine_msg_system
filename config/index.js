'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    // env: require('dev.env'),//使用config/dev.env.js中定义的编译环境
    assetsSubDirectory: 'static',//编译输出的二级目录
    assetsPublicPath: './',//编译发布的根目录,可配置为资源服务器域名或CDN域名
    productionSourceMap: false,
    proxyTable: { //需要proxyTable代理的接口(可跨域)
      '/api': {
        target: 'http://localhost:7896',//本地测试环境请求后台接口的域名
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''//这里理解成用'/api'代替target里面的地址,后面组件中我们掉接口时直接用api代替,
          // eg: 'http://localhost:7896/bdc/chinaPlace/getAllTownshipByFather'可直接使用'api/bdc/chinaPlace/getAllTownshipByFather'代替
        }
      },
      '/socket': {
        target: 'http://localhost:7896',
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/socket': ''
        }
      }
    },
/*    configureWebpack: {
      extensions: ['.js','.json','.vue'],
      alias: {
        '@': resolve('src'),
        public: resolve('public'),
        components: resolve('src/components'),
        util: resolve('src/utils'),
        store: resolve('src/store'),
        router: resolve('src/router')
      }
    },*/
    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,//运行时是否自动开启浏览器
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true


  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
