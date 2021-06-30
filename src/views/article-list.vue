<template>
<div class="article-list" ref="article-list">
    <van-pull-refresh 
    v-model="isrefreshLoading" 
    :head-height="80" 
    @refresh="onRefresh">
         <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
         <template #pulling="props">
           <img
             class="doge"
             src="https://img01.yzcdn.cn/vant/doge.png"
             :style="{ transform: `scale(${props.distance / 80})` }"
           />
         </template>   

         <!-- 释放提示 -->
         <template #loosing>
           <img class="doge" src="https://img01.yzcdn.cn/vant/doge.png" />
         </template>   

         <!-- 加载提示 -->
         <template #loading>
           <img class="doge" src="https://img01.yzcdn.cn/vant/doge-fire.jpg" />
         </template>
        <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad">
      <!-- 文章内容组件 -->
      <article-item v-for="(article,index) in artciles" 
         :key="index" 
         :article="article"/>
        <!--  <van-cell v-for="(article,index) in artciles" 
         :key="index" 
         :title="article.title" /> -->
        </van-list>
    </van-pull-refresh>
</div>
</template>
<script>
import {getArticle} from '../api/article'
import ArticleItem from '../components/article-item.vue'
import {debounce} from 'lodash'
export default {
name:'ArticleList',
props:{
    channel:{
        type:Object,
        required:true
    }
},
data(){
return {
      artciles: [], //文章列表数据
    //   控制加载中的 loading 状态
      loading: false,
    //   控制加载结束的状态
      finished: false,
    //   获取下一页的时间戳
    timestamp:null,
    // 下拉刷新的 loding 状态
    isrefreshLoading:false,
    // 滚动条到顶部的距离
    scrollTop:0
    }
},
mounted () {
  let articleList = this.$refs['article-list']
  articleList.onscroll= debounce(() => {
    
    this.scrollTop = articleList.scrollTop
   
  },100)
},
activated () {
  // activated 用户缓存，从缓存中激活
  this.$refs['article-list'].scrollTop = this.scrollTop
},
methods:{
   async onLoad () {
        // 1、请求数据
    const {data} = await getArticle({
        channel_id:this.channel.id,
        timestamp:this.timestamp || Date.now(), /* 时间戳，请求新的推荐数据传当前的时间戳，
                                请求历史推荐传指定的时间戳 */
        with_top:1
    })
        // 2、把数据放到 list 中
        const {results} = data.data
        this.artciles.push(...results)
        // 3、设置本次加载状态，来判断是否需要加载下次，否则就用于停在此处 
        this.loading = false
        // 4、数据全部加载完成
        if(results.length) {
            // 获取下一页的数据
            this.timestamp = results.pre_timestamp
        }else {
            // 没有数据时，把加载状态设为结束
            this.finished = true
        }
    },
    // 
   async onRefresh() {
        // 下拉属性 ，组件自己展示 loding 状态
        // 1、请求·数据
        const {data} = await getArticle({
        channel_id:this.channel.id,
        timestamp: Date.now(), 
        with_top:1
    })
        // 2、把数据放到数据列表中（往顶部追加）
        this.artciles.unshift(...data.data.results)
        // 3、关闭刷新点状态 loding
        this.isrefreshLoading = false
    }
},
components:{
    ArticleItem
},
};
</script>

<style scoped lang='less'>
    .article-list {
        position:fixed;
        left: 0;
        right: 0;
        bottom: 50px;
        top: 90px;
        overflow-y: auto;
    }
    .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>