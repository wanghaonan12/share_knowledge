import { postFile } from 'utils/request.js'
import { CONTENT } from '@/api/url_spllic'

//地址
export let createArticleApi = CONTENT + 'article/createOrUpdate'
/**
 * 获取文章
 * @param {*} params
 * @returns
 */
export const createArticle = (params) => {
  return new Promise((resolve, reject) => {
    postFile(createArticleApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
