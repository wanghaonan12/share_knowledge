const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    port: 8066,
    host: 'localhost',
  },
  transpileDependencies: true,
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
})
