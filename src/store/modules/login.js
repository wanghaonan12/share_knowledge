import { setItem, getItem, removeItem } from '@/utils/storage'
import { TOKEN, UserId, ROLER } from '@/constant'
import { loginUrl } from 'api/login.js'
import { getUserInfo } from '@/api/mine'
import { post } from 'utils/request.js'
import { Message } from 'element-ui'
import router from '@/router'

export default {
  state: () => ({
    token: getItem(TOKEN) || '',
    userId: getItem(UserId) || '',
    roler: getItem(ROLER) || '',
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserId(state, userId) {
      state.userId = userId
      setItem(UserId, userId)
    },
    setRoler(state, roler) {
      state.roler = roler
      setItem(ROLER, roler)
    },
  },
  actions: {
    loginByPassword(context, data) {
      post(loginUrl, { email: data.email, password: data.password })
        .then((res) => {
          if (res.roles != 'disable') {
            context.commit('setToken', res.token)
            context.commit('setUserId', res.id)
            context.commit('setRoler', res.roles)
            router.replace({ path: '/HomeView' })
          } else {
            Message.error('你的账户已被禁用无法登录，有问题请与管理员联系！')
          }
        })
        .catch((err) => {
          console.log(err)
          Message.error('登陆失败，请检查账号密码')
        })
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserId', '')
      context.commit('setRoler', '')
      router.replace({ path: '/PasswordLogin' })
      removeItem('userId')
      removeItem('token')
      removeItem('roler')
    },
    getRoler(context) {
      getUserInfo(context.state.userId).then((res) => {
        console.log(res)
        context.commit('setRoler', res.roles)
      })
    },
  },
}
