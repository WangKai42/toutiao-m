<template>
<div >
    <van-cell 
    class="comment-item">
        <van-image
        slot="icon"
        class="avatar"
        round
        fil="cover"
        :src="comment.aut_photo" />
        <div slot="title">
            <div class="title-wrap">
                <div class="name">{{comment.aut_name}} </div>
                <div class="like-wrap" @click="onCommentLike">
                    <van-icon 
                    :name="comment.is_liking ? 'good-job' : 'good-job-o'" 
                    :class="{liked:comment.is_liking}"
                    class="like-icon liked" 
                    />
                    <span class="like-count">{{comment.like_count}}</span>
                </div>
            </div>
            
            <div class="content">{{comment.content}} </div>
            <div>
                <span class="pubdate">{{comment.pubdate | datetime()}} </span>

                <van-button
                class="reply-btn"
                round
                size="mini"
                @click="$emit('reply-click',comment)">
                    {{comment.reply_count}} 回复</van-button>

            </div>
        </div>
       
    </van-cell>
</div>
</template>
<script>
import {addCommentLike,deleteCommentLike} from '../api/comment'
export default {

props:{
    comment:{
        type:Object,
        required:true
    }
},
data(){
return {

}
},
methods:{
    // 点赞
   async onCommentLike() {
    this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })
        if(this.comment.is_liking) {
            // 已点赞，取消点赞
            await addCommentLike(this.comment.aut_id)
            this.comment.like_count--
            if(this.comment.like_count < 0) {
                this.comment.like_count = 0
            }
        }else {
            // 位点赞 进行点赞
            await deleteCommentLike(this.comment.aut_id)
            this.comment.like_count++
        }
        this.comment.is_liking = !this.comment.is_liking
    }
},
components:{

},
};
</script>

<style scoped lang='less'>
    .comment-item{
        .avatar {
            width: 36px;
            height: 36px;
            margin-right: 10px;
        }
        .name {
            font-size: 14px;
            color: #406599;
        }
        .content {
            
            font-size: 16px;
            color: #222;
        }
        .pubdate {
            font-size: 10px;
        }
        .title-wrap {
            display: flex;
            justify-content: space-between;
        }
        .reply-btn {
            margin-left: 10px;
        }
        .liked {
            color: red;
        }
    }
</style>