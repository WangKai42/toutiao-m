<template>
<div class="search-suggestion">

    <van-cell 
    icon="search"
    v-for="(str,index) in suggestions"
    :key="index"
    @click="$emit('search',str)">
    <!-- 高亮显示 -->
    <div slot="title" v-html="highlight(str)"></div>
    </van-cell>

</div>
</template>
<script>
 import {getSearchSuggestion} from '../api/search'
 import { debounce } from 'lodash'
export default {

props:{
    searchText:{
        type:String,
        required:true
    }
},
data(){
return {
    // 联想建议数据
    suggestions:[]
}
},
methods:{
    highlight(str){
        // 正则表达式在的内容会被当做 字符串来处理
        // new RegExp(this.searchText,'gi')
      return str.replaceAll(this.searchText,
        `<span style="color:red"> ${this.searchText} </span`)
    }
},
components:{

},
watch:{
    // 要监视的数据的名称
    searchText:{
       handler: debounce( async function() {
           const {data} = await getSearchSuggestion(this.searchText)
           this.suggestions = data.data.options
        },300),
        // 初始化时就开始调用
        immediate:true
    }
}
};
</script>

<style scoped lang='less'>

</style>