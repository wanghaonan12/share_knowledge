import { del, get, post } from 'utils/request.js'
import { CONTENT } from '@/api/url_spllic'

//地址
export let getTageAllApi = CONTENT + 'article_tage/get'
export let createTageApi = CONTENT + 'article_tage/create'
export let deleteTageApi = CONTENT + 'article_tage/delete/'

/**
 * 获取文章分类
 * @returns
 */
export const getTageAll = () => {
  return new Promise((resolve, reject) => {
    get(getTageAllApi)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 创建文章标签
 * @param {"classify":String,"content": String} params
 * @returns
 */
export const createTage = (params) => {
  return new Promise((resolve, reject) => {
    post(createTageApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 删除标签
 * @param path String tageId
 * @returns
 */
export const deleteTage = (path) => {
  return new Promise((resolve, reject) => {
    post(deleteTageApi + path)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
