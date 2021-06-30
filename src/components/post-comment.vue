<template>
<div class="post-comment">
    <van-field
    v-model.trim="message"
    rows="2"
    autosize
    type="textarea"
    maxlength="50"
    placeholder="请输入留言"
    show-word-limit
    />
    <van-button 
    size="mini" 
    @click="onPost"
    :disabled="!message">
        发布
    </van-button>
</div>
</template>
<script>
import {addComment} from '../api/comment'
export default {

props:{
    target:{
        type:[Number,String,Object],
        required:true
    },
    articleId:{
        type:[Number,String,Object],
        default:null
    }
},
data(){
return {
    message:''
}
},
methods:{
    // 发表评论
  async  onPost() {
    const {data} = await addComment({
            target:this.target.toString(),
            content:this.message,
            art_id:this.articleId ?  this.articleId.toString() : null 
            // 文章id，对评论内容发表回复时，需要传递此参数，
            //  表明所属文章id。对文章进行评论，不要传此参数。
        })
            this.$emit('post-success',data.data.new_obj)
            // 响应结果
            this.$toast.success('发布成功')
            // 发布后清空文本
            this.message = ''
    }
},
components:{

},
};
</script>

<style scoped lang='less'>
    .post-comment {
        padding: 15px;
        display: flex;
        align-items: center;
    }
</style>