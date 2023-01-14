import Vue from 'vue'
import VueRouter from 'vue-router'
import vuex from '@/store/index'

Vue.use(VueRouter)

let routeWhiteList = ['LoginView', 'ForgetView', 'PasswordLogin', 'RegisterView']
let routes = []

//扫描当前文件夹下的。.s文件
const requireContext = require.context('./', true, /\.js$/)
//遍历requireContext将数组添加到routers
requireContext.keys().forEach((filename) => {
  //排除自身
  if (filename === './index.js') return
  const routerModule = requireContext(filename)
  routes = [...routes, ...(routerModule.default || routerModule)]
})
const router = new VueRouter({
  mode: 'history',
  routes,
})
router.beforeEach(async (to, from, next) => {
  if (vuex.state.login.token === '' && !routeWhiteList.includes(to.name)) {
    next({ name: 'LoginView' })
  } else next()
})

router.afterEach(() => {})
export default router
