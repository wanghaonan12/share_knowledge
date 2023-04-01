import axios from 'axios'
import store from '@/store'
import { BASEURL } from '@/api/url_spllic'
import { Message } from 'element-ui'

const request = axios.create({
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: BASEURL,
})
export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    request.get(url, { params }).then(
      (response) => {
        resolve(response)
      },
      (err) => {
        reject(err)
      },
    )
  })
}

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    request
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        },
      )
  })
}
export const postFile = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    request
      .post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        },
      )
  })
}

export const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    request
      .put(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        },
      )
  })
}
export const del = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    request
      .delete(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(
        (response) => {
          resolve(response)
        },
        (err) => {
          reject(err)
        },
      )
  })
}
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在这个位置需要统一的去注入token
    if (store.state.login.token) {
      config.headers['X-Token'] = store.state.login.token
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { code, msg, data } = response.data
    //   要根据code决定下面的操作
    if (code == 1) {
      console.log(data)
      return Promise.resolve(data)
    } else {
      return Promise.reject(new Error(msg))
    }
  },
  (error) => {
    Message.error({
      message: error.message,
    })
    return Promise.reject(error)
  },
)
export default request
