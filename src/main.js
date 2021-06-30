import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import './styles/index.css'

// 引入 vant 组件库
import Vant from 'vant';
import 'vant/lib/index.css';

// 引入 amfe-flexible
import 'amfe-flexible'
// dayji
import './utils/dayjs'

// 全局注册 vant 中的组件
Vue.use(Vant);




Vue.config.productionTip = false

// 创建了 vue 跟实例 将  router,store, 配置到跟实例
// 把 App根组件 渲染到  #app 节点
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')