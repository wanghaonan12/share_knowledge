import axios from 'axios'
import store from '@/store'

import { Message } from 'element-ui'

export const baseURL3 = 'http://localhost:8083'
export const baseURL2 = 'http://localhost:8082'
export const baseURL1 = 'http://localhost:8081'
export const remote = 'http://173.82.193.76:8083'

const request = axios.create({
  baseURL: baseURL3,
  timeout: 12000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
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
    if (code == 200 && data) {
      return data
    } else if (code == 200) {
      return response.data
    } else if (code == 500) {
      return response.data
    } else if (code == 10004) {
      // 未能读取到有效Token，清空storage
      window.localStorage.clear()
      console.log('message', message)
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
