/* 
    文章评论相关参数
*/

import request from '../utils/request'

// 获取文章列表
export const getComments = params => {
    return request({
        method: 'GET',
        url: '/app/v1_0/comments',
        params
    })
}

// 对评论或评论回复点赞
export const addCommentLike = likedId => {
    return request({
        method: 'POST',
        url: '/app/v1_0/comment/likings',
        data: {
            target: likedId
        }
    })
}

// 取消评论或评论回复点赞
export const deleteCommentLike = likedId => {
    return request({
        method: 'DELETE',
        url: `/app/v1_0/comment/likings/${likedId}`
    })
}

// 添加评论或评论回复
export const addComment = data => {
    return request({
        method: 'POST',
        url: `/app/v1_0/comments`,
        data
    })
}