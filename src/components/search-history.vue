<template>
<div class="search-history">
    <van-cell title="历史记录">
        <div v-if="isDeleteShow">
            <span @click="$emit('updata-history',[])">全部记录</span>
            &nbsp;&nbsp;
            <span @click="isDeleteShow = false">完成</span>
        </div>
        <van-icon 
        name="delete-o"
        v-else
        @click="isDeleteShow = true" />
    </van-cell>
    <van-cell 
    :title="item"
    v-for="(item,index) in searchHistorys"
    :key="index"
    @click="onDelete(item, index)">
        <van-icon 
        name="close" 
        v-show="isDeleteShow"
        />
    </van-cell>
</div>
</template>
<script>
// import {setItem} from '../utils/storage'
export default {

props:{
    searchHistorys:{
        type:Array,
        required:true
    }
},
data(){
return {
    isDeleteShow : false
}
},
methods:{
    // 删除单个
    onDelete(item,index) {
        // 删除状态下点击删除
        if(this.isDeleteShow) {
            this.searchHistorys.splice(index,1)
        //    持久化
        //    setItem('search-historys',this.searchHistorys)
           return
 
        }
        // 非删除状态下点击搜索
        this.$emit('search',item)
    }
},
components:{

},
};
</script>

<style scoped lang='less'>

</style>