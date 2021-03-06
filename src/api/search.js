/* 
搜索模块
*/

import request from '../utils/request'

// 获取联想建议
export const getSearchSuggestion = q => {
    return request({
        method: 'GET',
        url: '/app/v1_0/suggestion',
        params: {
            q // 查询搜索关键词
        }
    })
}

// 获取搜索结果
export const getSearchResult = params => {
    return request({
        method: 'GET',
        url: '/app/v1_0/search',
        params
    })
}

// 获取搜索历史
export const getSearchHistorys = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/search/histories'
    })
}