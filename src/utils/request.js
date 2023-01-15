import axios from 'axios'
import store from '@/store'

import { Message } from 'element-ui'

const request = axios.create({
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
  },
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
    if (store.getters.token) {
      config.headers.set = { 'X-Token': store.getters.token }
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
    const { code, message, data } = response.data
    //   要根据code决定下面的操作
    if (code == 1) {
      console.log(data)
      return Promise.resolve(data)
    } else {
      return Promise.reject(new Error(message))
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
