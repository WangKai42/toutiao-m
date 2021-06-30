import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '../utils/storage'

Vue.use(Vuex)

const user_key = 'toutiao-user'

export default new Vuex.Store({
    state: {
        //  当前登录用户的登录状态
        // 读取是转为对象
        // user: JSON.parse(window.localStorage.getItem('user'))
        user: getItem('user_key'),
        cachePages: ['LatoutIndex']
    },
    mutations: {
        setUser(state, data) {
            state.user = data
                // 为了防止刷新数据 数据丢失，要把数据保存在本地存储中
                // window.localStorage.setItem('user', JSON.stringify(state.user))
            setItem('user_key', state.user)
        },
        // 添加缓存页面
        addCachePage(state, pageName) {
            // 如果不包含就添加上
            if (!state.cachePages.includes(pageName)) {
                state.cachePages.push(pageName)
            }
        },
        // 移除缓存页面
        removeCachePage(state, pageName) {
            const index = state.cachePages.indexOf(pageName)
            if (index !== -1) {
                state.cachePages.splice(index, 1)
            }
        }
    },
    actions: {},
    modules: {}
})