/* 
用户请求模块
*/

import request from '../utils/request'

export const login = data => {
    return request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data
    })
}

/* 
短信验证码
*/
export const sendSms = mobile => {
    return request({
        method: 'GET',
        url: `/app/v1_0/sms/codes/${mobile}`
    })
}

/* 
获取登录用户自己的信息
 */
export const getCurrentUser = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user'
            /* headers: {
                Authorization: `Bearer ${store.state.user.token}`
            } */
    })
}

/* 获取用户频道列表数据 */
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: '/app/v1_0/user/channels'
    })
}

/* 关注用户 */
export const addFollow = userId => {
    return request({
        method: 'POST',
        url: '/app/v1_0/user/followings',
        data: {
            target: userId
        }
    })
}

/* 取消关注用户 */
export const deleteFollow = userId => {
    return request({
        method: 'DELETE',
        url: `/app/v1_0/user/followings/${userId}`
    })
}

/* 获取用户个人资料 */
export const getUserProfile = () => {
    return request({
        method: 'GET',
        url: `/app/v1_0/user/profile`
    })
}

/* 修改用户个人资料 */
export const updataUserProfile = data => {
    return request({
        method: 'PATCH',
        url: `/app/v1_0/user/profile`,
        data
    })
}

/* 编辑用户照片资料（头像、身份证照片） */
export const editUserPhoto = data => {
    return request({
        method: 'PATCH',
        url: `/app/v1_0/user/photo`,
        data
    })
}