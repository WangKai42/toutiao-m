<template>
<div class="search-container">
    <!-- 搜索框 -->
    <!-- 在 van-search 外层增加 form 标签，
    且 action 不为空，即可在 iOS 输入法中显示搜索按钮 -->
    <form action="/">
        <van-search 
        v-model="searchText" 
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch(searchText)"
        @cancel="$router.back()"
        @focus="isResultShow = false" />
    </form>
     <!-- 搜索框end -->

    <!-- 搜索结果 -->
    <search-result v-if="isResultShow"
    :search-text="searchText" />
    <!-- 搜索结果end -->

    <!-- 联想建议 -->
    <search-suggestion v-else-if="searchText"
    :search-text="searchText"
    @search="onSearch" />
    <!-- 联想建议end -->
    <!-- 历史记录 -->
    <search-history v-else 
    :search-historys="searchHistorys"
    @search="onSearch"
    @updata-history="searchHistorys = $event"/>
    <!-- 点击历史记录 开始搜索调用 @search="onSearch" -->
     <!-- 历史记录end -->

</div> 
</template>
<script>
import SearchSuggestion from '../components/search-suggestion.vue'
import SearchHistory from '../components/search-history.vue'
import SearchResult from '../components/search-result.vue'
import {setItem,getItem} from '../utils/storage'
// import {getSearchHistorys} from '../api/search'
import {mapState} from 'vuex'
export default {

props:{

},
data(){
return {
    // 搜索框绑定数据
    searchText:'',
    // 搜索结果组件的显示隐藏
    isResultShow:false,
    // 搜索历史数据
    searchHistorys:getItem('search-historys',this.searchHistorys) || []
}
},
created(){
    // loadSearchHistories()
},
methods:{
    // 搜索
    onSearch(searchText) {
        // 把点击的搜索名 传给输入框
        this.searchText = searchText
        // 把搜索记录保存在this.searchText里
        const index = this.searchHistorys.indexOf(searchText)
        if (index !== -1) {
            // 把触发项删除
            this.searchHistorys.splice(index,1)
        }
        // 把最新数据存入数组
        this.searchHistorys.unshift(searchText)

        /* 如果用户已登录则把历史记录存储在线上 */

        // 如果未登录则保存在本地
        setItem('search-historys',this.searchHistorys)

        // 显示搜索结果
        this.isResultShow = true
    },
   async loadSearchHistories () {
    //    把线上的记录和本地的合并起来
    let searchHistorys = getItem('search-historys',this.searchHistorys) || []
   /*  if (this.user) {
        const {data} = await getSearchHistorys()
        // console.log(data.data.keywords);
        searchHistorys = [...new Set([...searchHistorys, ...data.data.keywords])]
    } */
        // console.log(searchHistorys);
        this.searchHistorys = searchHistorys
   }
},
computed:{
    ...mapState(['user'])
},
watch: {
    // 监视搜索历史记录的变化，存储到本地，其余地方可省略
    searchHistorys() {
        setItem('search-historys',this.searchHistorys)
    }
},
components:{
    SearchSuggestion,
    SearchHistory,
    SearchResult
},
};
</script>

<style scoped lang='less'>

</style>