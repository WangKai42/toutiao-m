/* 
请求模块
*/
import axios from 'axios'
// 在非组件模块中获取 store 必须通过以下方式
// 在这里单独加载 store 和在组件中 this.$store 一个东西
import store from '../store/index'
import { Toast } from 'vant'
import router from '../router/index'

const refreshTokenReq = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn'
})

const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn' // 基础路径
})

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function(config) {
    const { user } = store.state
        // 如果用户已登录 统一给接口设置 token 信息
    if (user) {
        config.headers.Authorization = `Bearer ${user.token}`
    }
    // 处理完之后要把 config 返回
    return config
}, function(error) {
    return Promise.reject(error)
});

// 添加响应拦截器
request.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    return response
}, async function(error) {
    // 对响应错误做点什么
    // 把错误信息的状态码给status 
    const status = error.response.status
    if (status === 400) {
        // 客户端请求参数异常
        Toast.fail('请求参数异常')

    } else if (status === 401) {
        // token 无效
        // 1、去过没有 user 或 user.token 去重新登录
        let user = store.status
        if (!user || !user.token) {
            // 跳转去登录页进行重新登录
            return redirectLogin()
        }
        // 2、如果有 refresh_token 则 用refresh_token重新获取心得 token
        try {
            const { data } = await refreshTokenReq({
                    method: 'PUT',
                    url: '/app/v1_0/authorizations',
                    headers: {
                        Authorization: `Bearer ${user.refresh_token}`
                    }
                })
                // 3、拿到新的 token 把它更新到容器中
                // console.log(data);
            user.token = data.data.token
            store.commit('setUser', user)

            // 4、把失败的请求重新发出去
            // error.config 是本次请求的配置对象
            return request(error.config)
        } catch (err) {
            // 刷新 token 失败时直接跳转
            redirectLogin()
        }



    } else if (status === 403) {
        // 无权限
        Toast.fail("无权限")
    } else if (status >= 500) {
        // 服务端异常
        Toast.fail('服务端异常')
    }
    return Promise.reject(error)
})

function redirectLogin() {
    // 替换路径
    router.replace({
        name: 'login',
        // 传递查询参数 参数会以 ？作为分隔符放到 url后面
        query: {
            // 当前路径
            redirect: router.currentRoute.fullPath
        }
    })
}

// 导出
export default request