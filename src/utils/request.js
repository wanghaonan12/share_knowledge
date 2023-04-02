import axios from 'axios'
import store from '@/store'
import { BASEURL } from '@/api/url_spllic'
import { Message } from 'element-ui'

export const request = axios.create({
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
export const postFile = (url, data) => {
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

// 将参数转换成功 formdata 接收格式
export const stringify = (data) => {
  const formData = new FormData()
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      if (data[key]) {
        if (data[key].constructor === Array) {
          if (data[key][0]) {
            if (data[key][0].constructor === Object) {
              formData.append(key, JSON.stringify(data[key]))
            } else {
              data[key].forEach((item, index) => {
                formData.append(key + `[${index}]`, item)
              })
            }
          } else {
            formData.append(key + '[]', '')
          }
        } else if (data[key].constructor === Object) {
          formData.append(key, JSON.stringify(data[key]))
        } else {
          formData.append(key, data[key])
        }
      } else {
        if (data[key] === 0) {
          formData.append(key, 0)
        } else {
          formData.append(key, '')
        }
      }
    }
  }
  return formData
}

export default request
