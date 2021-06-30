import Vue from 'vue'
// 初始化 dayjs 
import dayjs from 'dayjs'

import 'dayjs/locale/zh-cn'

import relativeTime from 'dayjs/plugin/relativeTime'

// 配置使用相对时间
dayjs.extend(relativeTime)

// 配置中午语言包
dayjs.locale('zh-cn')

// 把处理相对时间的代码封装为全局过滤器
// 在组件模板中使用过滤器
Vue.filter('relativeTime', value => {
        return dayjs(value).from(dayjs())
    })
    // 格式化时间
Vue.filter('datetime', (value, format = 'YYYY-MM-DD HH:mm') => {
    return dayjs(value).format(format)
})