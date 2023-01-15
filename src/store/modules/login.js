import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN, UserId } from '@/constant'
import { loginUrl } from 'api/login.js'
import { post } from 'utils/request.js'
import { Message } from 'element-ui'
import router from '@/router'

export default {
  state: () => ({
    token: getItem(TOKEN) || '',
    userId: getItem(UserId) || '',
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
  },
  actions: {
    loginByPassword(context, data) {
      post(loginUrl, { email: data.email, password: data.password })
        .then((res) => {
          context.commit('setToken', res.token)
          context.commit('setUserId', res.id)
          router.replace({ path: '/HomeView' })
        })
        .catch((err) => {
          console.log(err)
          Message.error('登陆失败，请检查账号密码')
        })
    },
    logout(context) {
      context.commit('setToken', '')
      context.commit('setUserId', '')
      router.replace({ path: '/PasswordLogin' })
      removeAllItem()
    },
  },
}
