import { post, get, postFile, del } from 'utils/request.js'
import { USER, CONTENT } from '@/api/url_spllic'

//地址
export let getAllArticleApi = CONTENT + 'article/findArticle'
export let createArticleApi = CONTENT + 'article/createOrUpdate'
export let createBrowsApi = CONTENT + 'brows/createOrUpdate'
export let getArticleByTagApi = CONTENT + 'article/getByTagId'
export let getArticleDetailApi = CONTENT + 'article/getDetail'
export let createHistoryApi = CONTENT + 'brows/createOrUpdate'
export let praiseCreateApi = USER + 'praise/create'
export let deleteArticleApi = CONTENT + 'article/delete'
export let createAnswerApi = CONTENT + 'answer/createOrUpdate'
export let createDiscussApi = USER + 'discuss/createOrUpdate'
export let getDiscussApi = USER + 'discuss/get'
export let getAuswerApi = CONTENT + 'answer/get/'
export let AcceptAnswerApi = CONTENT + 'answer/accept'
export let DeleteAnswerApi = CONTENT + 'answer/delete'
export let DeleteDiscussApi = USER + 'discuss/delete'

// export let createBrowsApi = CONTENT + '/brows/createOrUpdate'
/**
 * 删除评论
 * @param {*} params
 * @returns
 */
export const DeleteDiscuss = (params) => {
  return new Promise((resolve, reject) => {
    post(DeleteDiscussApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 删除回答
 * @param {*} params
 * @returns
 */
export const DeleteAnswer = (params) => {
  return new Promise((resolve, reject) => {
    post(DeleteAnswerApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 采用回答
 * @param {*} params
 * @returns
 */
export const AcceptAnswer = (params) => {
  return new Promise((resolve, reject) => {
    post(AcceptAnswerApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 获取评论
 * @param {*} params
 * @returns
 */
export const getDiscuss = (params) => {
  return new Promise((resolve, reject) => {
    post(getDiscussApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 添加评论
 * @param {*} params
 * @returns
 */
export const createDiscuss = (params) => {
  return new Promise((resolve, reject) => {
    post(createDiscussApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 添加回答
 * @param {*} params
 * @returns
 */
export const createAnswer = (params) => {
  return new Promise((resolve, reject) => {
    postFile(createAnswerApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
/**
 * 删除文章
 * @param {*} params
 * @returns
 */
export const deleteArticle = (params) => {
  return new Promise((resolve, reject) => {
    post(deleteArticleApi, params)
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
/**
 * 根据文章id获取文章详情
 * @param String
 * @returns
 */
export const praiseCreate = (params) => {
  return new Promise((resolve, reject) => {
    get(praiseCreateApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 根据文章id获取文章详情
 * @param String
 * @returns
 */
export const getAuswer = (params) => {
  return new Promise((resolve, reject) => {
    get(getAuswerApi + params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 文章点赞
 * @param String
 * @returns
 */
export const getArticleDetail = (params) => {
  return new Promise((resolve, reject) => {
    get(getArticleDetailApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * 根据文章id获取文章详情
 * @param String
 * @returns
 */
export const createHistory = (params) => {
  return new Promise((resolve, reject) => {
    get(createHistoryApi, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
