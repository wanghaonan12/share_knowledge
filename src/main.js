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
// WebSocket封装方法
import * as socketApi  from "@/utils/WebSoket";

Vue.prototype.socketApi = socketApi
Vue.use(VueCoreVideoPlayer)
Vue.use(preview)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
