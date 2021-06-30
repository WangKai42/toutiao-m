<template>
<div class="home-container">
   <!-- 导航栏 -->
   <van-nav-bar class="app-nav-bar">
       <!-- 搜索按钮 -->
       <van-button
       slot="title"
       class="search-btn"
       icon="search"
       type="info"
       round
       size="small"
       to="/search">搜索</van-button>
   </van-nav-bar>
   <!-- 文章频道列表标签 -->
   <van-tabs v-model="active"
   class="channel-tabs">
      <van-tab
      class="tab-item" 
      :title="channel.name"
      v-for="channel in channels" 
      :key="channel.id">
      <!-- 文章列表组件 -->
      <article-list :channel="channel" />
      </van-tab>
      <!-- 占位元素 -->
      <div slot="nav-right"
      class="wap-nav-blank"> </div>
      <!-- 汉堡按钮 -->
      <div slot="nav-right"
      @click="isChanneleShow = true"
      class="wap-nav-wrap">
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>
    <!-- 频道编辑弹出层 --> 
    <!-- get-container="body" 指定弹出层挂载到 body 节点 -->
    <van-popup 
    v-model="isChanneleShow" 
    position="bottom" 
    closeable
    class="channele-edit-popup"
    close-icon-position="top-left"
    get-container="body">
    <!-- 频道编辑组件 -->
    <!-- 模板中 $event 表示事件参数 -->
    <channele-edit :user-channels = "channels"
    @close="isChanneleShow = false"
    @switch="active = $event"
    :active="active"/>
    </van-popup>
</div>
</template>
<script>
import {getUserChannels} from '../api/user'
import ArticleList from './article-list.vue'
import {mapState} from 'vuex'
import {getItem} from '../utils/storage'
// 引入频道编辑组件
import ChanneleEdit from '../components/channele-edit.vue'
export default {

props:{
},
data(){
return {
    active:0,
    // 频道数据
    channels:[],
    // 弹出层的显示与隐藏
    isChanneleShow:false
}
},
created(){
    this.loadChannels()
},
methods:{
//  请求获取频道数据
   async loadChannels(){
    let channels = []
    if(this.user) {
        // 已登录获取线上频道
        const {data} = await getUserChannels()
        channels = data.data.channels 
    }else{
        // 未登录获取本地
       const localChannels = getItem('user-channels')
       if(localChannels) {
        //    如果有本地存储数据
        channels = localChannels
       }else {
        //没有本地存储数据 就用默认推荐数据
        const {data} = await getUserChannels()
        channels = data.data.channels 
       }
    }
    // 把channels 给 data 里的 channels
    this.channels = channels

   /*  const {data} = await getUserChannels()
    this.channels = data.data.channels */
    
    },
    // 子组件来切换频道
   /*  switchTive(index) {
        this.active = index
    } */
},
computed:{
    ...mapState(['user'])
},
components:{
    ArticleList,ChanneleEdit
},
};
</script>

<style scoped lang='less'>
    .home-container{
       /deep/ .van-nav-bar__title{
            max-width: none;
        }
        .search-btn{
            width: 277px;
            height: 32px;
            background-color: #5babfb;
            border: none;
            .van-icon{
                font-size: 16px;
            }
            .van-button__text{
                font-size: 14px;
            }
        }
        .channel-tabs {
           /deep/ .van-tab{
                border-right: 1px solid #edeff3;
                border-bottom: 1px solid #edeff3;
            }
            /deep/ .van-tabs__line {
                width: 15px !important;
                height: 3px;
                bottom: 20px;
                background-color: #3296fa;
            }
        }
        .wap-nav-wrap {
            position: fixed;
            right: 0;
            height: 45px;
            width: 33px;
            text-align: center;
            line-height: 43px;
            background-color: #fff;
            opacity: .8;
            &:before{
                content: '';
                width: 1px;
                height: 45px;
                background: url('./images/line.png') no-repeat;
                background-size: contain;
                position: absolute;
                left: 0;
                top: 0;
            }
        }
        .wap-nav-blank {
            width: 33px;
            flex-shrink: 0;
        }
    }
    .channele-edit-popup {
            height: 100%;
        }
</style>