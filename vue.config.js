const {defineConfig} = require('@vue/cli-service')
const path = require('path')
const {VantResolver} = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        port: 8066,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: 'localhost',
        // client: {
        //   webSocketURL: 'ws://localhost:8083/ws',
        // },
        // proxy: {
        //     '/api': {
        //         /* 目标代理服务器地址 */
        //         target: 'localhost:8083',
        //         /* 允许跨域 */
        //         changeOrigin: true,
        //         ws: false,
        //         pathRewrite: {   //重写路径
        //             '^/api': '/api'   // 这种接口配置出来     http://XX.XX.XX.XX:8083/api/login
        //         }
        //     },
        // },
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
