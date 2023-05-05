import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'amfe-flexible/index.js'
import '@/assets/icons/iconfont.css'
import './plugins/element.js'
import preview from 'vue-photo-preview' //图片预览
import 'vue-photo-preview/dist/skin.css' //图片预览样式
import VueCoreVideoPlayer from 'vue-core-video-player' //视频播放组件
import '@vant/touch-emulator' //vant屏幕适配
import 'babel-polyfill' //ES6语法转换
import 'element-ui/lib/theme-chalk/index.css'
// WebSocket封装方法
import * as socketApi from '@/utils/WebSoket'
import 'vant/lib/index.css' //导入组件样式
import VueLoadmore from 'vuejs-loadmore' //刷新组件

Vue.prototype.socketApi = socketApi
Vue.use(VueCoreVideoPlayer)
Vue.use(preview)
Vue.use(ElementUI)
Vue.use(VueLoadmore)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
