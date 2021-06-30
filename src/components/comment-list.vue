<template>
<div class="comment-list">
    <van-cell title="全部评论"></van-cell>
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">

        <!-- <van-cell 
        v-for="(item,index) in list" 
        :key="index" 
        :title="item.content" /> -->

        <comment-item  
        v-for="(comment,index) in list" 
        :key="index"
        :comment="comment"
        @reply-click="$emit('reply-click',$event)"/>
    </van-list>
</div>
</template>
<script>
import {getComments} from '../api/comment'
import commentItem from './comment-item.vue'
export default {

props:{
    source:{
        type:[Number,String,Object],
        required:true
    },
    type:{
        type:String,
        default:'a'
    },
    list:{
        type:Array,
        // 数组或对象的默认值必须通过函数返回
        default:() => []
    }
},
data(){
return {
    // list: [],
    loading: false,
    finished: false,
    // 显示第几页数据
    offset:null,
    // 每页的数据数
    limit:10
}
},
methods:{
   async onLoad() {
        // 1、 请求获取数据
        const {data} = await getComments({
            type:this.type, // a 是对文章评论， c 对回复评论
            source:this.source.toString(),
            offset:this.offset,
            limit:this.limit
        })
        // 把评论数据传给父组件
        this.$emit('update-total-count',data.data.total_count)

        // 2、把数据存储到 list
        const {results} = data.data
        this.list.push(...results)
        // 3、关闭 loading 
        this.loading = false
        // 4、判断是否还有数据，
        if(results.length) {
            // 如果还有加载下一页
            this.offset = results.last_id
        }else {
            //  如果没有 就把 finished 设为 true 不在加载
            this.finished = true
        }
        
    },
},
components:{
    commentItem
},
};
</script>

<style scoped lang='less'>

</style>