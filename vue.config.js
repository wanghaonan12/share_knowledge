const path = require('path')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/globalVariable.scss"; @import "@/assets/styles/reset.scss";`,
      },
    },
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('api', path.resolve(__dirname, './src/api'))
      .set('utils', path.resolve(__dirname, './src/utils'))
  },
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: 'localhost',
    port: 8066,
    /* 使用代理 */
    proxy: {
      '/api': {
        /* 目标代理服务器地址 */
        target: 'http://173.82.193.76:8083',
        /* 允许跨域 */
        changeOrigin: true,
        pathRewrite: {
          '^/api': '', //规定请求地址以什么作为开头
        },
      },
    },
  },
}
