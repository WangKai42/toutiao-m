<template>
<div class="comment-reply">
    <!-- 头部 -->
    <van-nav-bar :title="`${comment.reply_count}条回复`">
        <van-icon 
        slot="left" name="cross" 
        @click="$emit('close')"/>
    </van-nav-bar>
     <!-- 头部end -->

     <!-- 当前评论项 -->
     <comment-item
    :comment="comment" />
     <!-- 当前评论项end -->

     <!-- 所有回复中的回复 -->
     <comment-list 
     title="所有回复"
     :source="comment.com_id"
     type="c"
     :list="commentList"/>
     <!-- 所有回复中的回复end -->

      <!-- 底部区域 -->
    <div class="article-bottom">

        <van-button
        class="comment-btn"
        type="default"
        round
        size="small"
        @click="isPostShow = true">
            写评论
        </van-button>
    </div>
    <!-- 发布评论 -->
    <van-popup 
    v-model="isPostShow" 
    position="bottom">
    <!-- 发布回复 -->
    <post-comment
    :target="comment.com_id"
    :article-id="articleId" 
    @post-success="onPostSuccess"/>
    </van-popup>
</div>
</template>
<script>
import CommentItem from '../components/comment-item.vue'
import CommentList from '../components/comment-list.vue'
import PostComment from '../components/post-comment.vue'
export default {

props:{
    // 查看回复评论项
    comment:{
        type:Object,
        required:true
    },
    articleId:{
        type:[Number,String,Object],
        required:true
    }
},
data(){
return {
    isPostShow:false,
    // 评论回复列表
    commentList:[]
}
},
methods:{
    onPostSuccess(comment) {
        // 将发布成功的评论放到顶部
        this.commentList.unshift(comment)
        // 发布后更新评论数量
        this.comment.reply_count++
        // 发布后关闭弹出框
        this.isPostShow = false
    }
},
components:{
CommentItem,
CommentList,
PostComment
},
};
</script>

<style scoped lang='less'>
        // 底部区域
        .article-bottom {
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        padding: 10px;
        .comment-btn {
            margin: 0 auto;
            width: 200px;
        }
    }
</style>