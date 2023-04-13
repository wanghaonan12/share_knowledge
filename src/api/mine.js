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
export let getUserApi = USER + 'user/getAll'
export let setUserRolerApi = USER + 'user/setRoles'
export let GetPraiselApi = CONTENT + 'article/findPraiseArticle'
export let ApplyForApi = USER + 'user/applyFor'
export let JoinForumApi = USER + 'user/joinForum'
export let RemoveForumApi = USER + 'user/removeForum'
export let getAllUserAndManagementApi = USER + 'user/getAllUserAndManagement'
export let createManagementApi = USER + 'user/createManagement'
export let removeManagementApi = USER + 'user/removeManagement'

/**
 * 设置管理
 * @param {*} params
 * @returns
 */
export const removeManagement = (params) => {
  return new Promise((resolve, reject) => {
    post(removeManagementApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 设置管理
 * @param {*} params
 * @returns
 */
export const createManagement = (params) => {
  return new Promise((resolve, reject) => {
    post(createManagementApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 获取所有用户和其权限
 * @param {*} params
 * @returns
 */
export const getAllUserAndManagement = (params) => {
  return new Promise((resolve, reject) => {
    post(getAllUserAndManagementApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 加入论坛
 * @param {*} params
 * @returns
 */
export const JoinForum = (params) => {
  return new Promise((resolve, reject) => {
    post(JoinForumApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 移出论坛
 * @param {*} params
 * @returns
 */
export const RemoveForum = (params) => {
  return new Promise((resolve, reject) => {
    post(RemoveForumApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 申请
 * @param {*} params
 * @returns
 */
export const ApplyFor = (params) => {
  return new Promise((resolve, reject) => {
    post(ApplyForApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 设置用户权限角
 * @param {*} params
 * @returns
 */
export const setUserRoler = (params) => {
  return new Promise((resolve, reject) => {
    post(setUserRolerApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 用户信息
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
 * 获取所有用户
 * @param {*} params
 * @returns
 */
export const getUser = (params) => {
  return new Promise((resolve, reject) => {
    post(getUserApi, params)
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
  // window.location.href = BASEURL + AliPayApi + '/' + total + '/' + store.state.login.userId
  window.location.href =
    'http://ggjzm8.natappfree.cc' + AliPayApi + '/' + total + '/' + store.state.login.userId
}
