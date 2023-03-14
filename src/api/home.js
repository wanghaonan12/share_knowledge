import { post } from 'utils/request.js'
import { CONTENT } from '@/api/url_spllic'

//地址
export let getAllArticleApi = CONTENT + 'article/getAll'
export let createArticleApi = CONTENT + 'article/createOrUpdate'
export let createBrowsApi = CONTENT + 'brows/createOrUpdate'
export let getArticleByTagApi = CONTENT + 'article/getByTagId'
// export let createBrowsApi = CONTENT + '/brows/createOrUpdate'

/**
 * 获取文章
 * @param {*} params
 * @returns
 */
export const getAllArticle = (params) => {
  return new Promise((resolve, reject) => {
    post(getAllArticleApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 *
 * 文章id如果不填，就是创建，填写之后就是修改
 * @param {id:int,title:String,content:String,price:int,articleTagid:articleTagid,share:boolean,award:int,file:文件} params
 * @returns
 */
export const createArticle = (params) => {
  return new Promise((resolve, reject) => {
    post(createArticleApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 *  创建浏览记录
 * @param articleId int
 * @returns
 */
export const createBrows = (params) => {
  return new Promise((resolve, reject) => {
    post(createBrowsApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 根据标签id获取不同类型的文章
 * @param {pageNum: 1, pageSize:10, content:[tageId]} params
 * @returns
 */
export const getArticleByTag = (params) => {
  return new Promise((resolve, reject) => {
    post(getArticleByTagApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
