<template>
<div class="search-result">
    <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
    <van-cell v-for="(item,index) in list" 
    :key="index" 
    :title="item.title" />
    </van-list>
</div>
</template>
<script>
import {getSearchResult} from '../api/search'
export default {

props:{
  searchText:{
        type:String,
        required:true
    }
},
data(){
return {
    list: [],
      loading: false,
      finished: false,
    }
},
methods:{
   async onLoad() {
      // 1、请求获取数据
    const {data} = await getSearchResult({
      page:this.page,
      per_page:this.per_page,
      q:this.searchText
    })
      // 2、将数据放到·数据列表中
      const {results} = data.data
      this.list.push(...results)
      // 3、关闭本次的 loading
      this.loading = false
      // 4、如果有则 更新获取下一页，如果没有
        // 则把 finished 设置为 true 关闭加载更多
      if(results.length) {
        this.page++
      }else {
        this.finished = true
      }
        
    },
},
components:{

},
};
</script>

<style scoped lang='less'>
    .search-result {
        position: fixed;
        top: 54px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: auto;
    }
</style>