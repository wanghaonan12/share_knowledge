import { get, post } from 'utils/request.js'
import { USER, CONTENT } from '@/api/url_spllic'
import { BASEURL } from '@/api/url_spllic'
import store from '@/store'

//地址
export let getUserInfoApi = USER + 'user/findUser'
export let UpdataApi = USER + 'user/update'
export let HistoryApi = CONTENT + 'brows/getByUserId'
export let AliPayApi = USER + 'alipay/pay'
export let BonusDetailApi = USER + 'bounds/details'
export let GetPraiselApi = CONTENT + 'article/findPraiseArticle'
/**
 * 获取文章
 * @param {*} params
 * @returns
 */
export const getUserInfo = (params) => {
  return new Promise((resolve, reject) => {
    get(getUserInfoApi + '?userId=' + params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 获取文章
 * @param {*} params
 * @returns
 */
export const getHistory = (params) => {
  return new Promise((resolve, reject) => {
    get(HistoryApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 获取点赞文章
 * @param {*} params
 * @returns
 */
export const GetPraisel = (params) => {
  return new Promise((resolve, reject) => {
    post(GetPraiselApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 更新用户数据
 * @param {*} params
 * @returns
 */
export const updata = (params) => {
  return new Promise((resolve, reject) => {
    post(UpdataApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 获取积分详情
 * @param {*} params
 * @returns
 */
export const BonusDetail = (params) => {
  return new Promise((resolve, reject) => {
    post(BonusDetailApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 更新用户数据
 * @param {*} params
 * @returns
 */
export const AliPay = (total) => {
  window.location.href = BASEURL + AliPayApi + '/' + total + '/' + store.state.login.userId
}
