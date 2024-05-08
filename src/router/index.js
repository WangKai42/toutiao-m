import Vue from 'vue'
import VueRouter from 'vue-router'
import { Dialog } from 'vant'
import store from '../store'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login.vue'),
        meta: { requiresAuth: false }
    }, {
        path: '/',
        component: () =>
            import ('../views/layout/'),
        children: [{
                path: '', // 默认子路由
                name: 'home',
                component: () =>
                    import ('../views/Home.vue'),
                meta: { requiresAuth: false }
            },
            {
                path: '/qa',
                name: 'qa',
                component: () =>
                    import ('../views/qa.vue'),
                meta: { requiresAuth: false }
            },
            {
                path: '/video',
                name: 'video',
                component: () =>
                    import ('../views/video.vue'),
                meta: { requiresAuth: false }
            },
            {
                path: '/my',
                name: 'my',
                component: () =>
                    import ('../views/my.vue'),
                meta: { requiresAuth: false }
            }
        ]
    },
    {
        path: '/search',
        name: 'search',
        component: () =>
            import ('../views/search.vue'),
        meta: { requiresAuth: false }
    },
    {
        // 动态路由
        path: '/article/:articleId',
        name: 'article',
        component: () =>
            import ('../views/article.vue'),
        // 将动态路由参数映射到组件的 props 中，无论是维护还是访问都比较方便
        props: true,
        meta: { requiresAuth: false }
    },
    {
        path: '/user-profile',
        name: 'user-profile',
        component: () =>
            import ('../views/user-profile.vue'),
        meta: { requiresAuth: false }
    },
    {
        path: '/user-chat',
        name: 'user-chat',
        component: () =>
            import ('../views/user-chat.vue'),
        meta: { requiresAuth: true }
    }

]

const router = new VueRouter({
    routes
})

// next 放行标记
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        // 如果一登录 直接通过
        if (store.state.user) {
            return next()
        }
        // 未登录提示登录
        Dialog.confirm({
                title: '服务提示',
                message: '该功能需登录才能服务，确认登录吗'
            })
            .then(() => {
                // 确认了放行
                router.replace({
                    name: 'login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
            })
            .catch(() => {
                // 取消了中断
                next(false)
            })
    } else {
        // 不需要登录的直接放行
        next()
    }
})
export default router