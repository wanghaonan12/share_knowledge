import { get, post } from 'utils/request.js'
import { USER } from '@/api/url_spllic'

//地址
export let loginUrl = USER + '/user/login'
export let forgetPasswordApi = USER + '/user/forget'
export let getVerApi = USER + '/user/verification'
export let registerApi = USER + '/user/create'

/**
 * 获取验证码
 * @param {*} params
 * @returns
 */
export const getVer = (params) => {
  return new Promise((resolve, reject) => {
    get(getVerApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 忘记密码
 * @param {*} params
 * @returns
 */
export const forgetPassword = (params) => {
  return new Promise((resolve, reject) => {
    post(forgetPasswordApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 注册账号
 * @param {*} params
 * @returns
 */
export const register = (params) => {
  return new Promise((resolve, reject) => {
    post(registerApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
