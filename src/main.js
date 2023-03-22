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
Vue.use(preview)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
