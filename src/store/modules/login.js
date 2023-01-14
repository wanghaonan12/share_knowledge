import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN, UserId } from '@/constant'

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
  },
  actions: {
    logout() {
      this.commit('user/setToken', '')
      removeAllItem()
    },
  },
}
