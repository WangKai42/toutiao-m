<template>
<div class="article-container">
    <!--   -->
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="文章详情"
      left-arrow
      @click-left="$router.back()" />

    <!-- 主体内容 -->
    <div class="article-wrap">
          <!-- 标题 -->
      <h1  class="title"> {{article.title}}</h1>
      <van-cell center class="user-info">
        <div slot="title" class="name">{{article.aut_name}}</div>
        <van-image
        class="avatar"
        slot="icon"
        round
        fit="cover"
        :src="article.aut_photo"
        />
        <div slot="label" class="pabdata">
            {{article.pubdate | relativeTime}}
        </div>
        <van-button
        class="fowllow-btn"
        :type="article.is_followed ? 'danger' : 'info'"
        :icon="article.is_followed ? '' : 'plus'"
        round
        size="small"
        :loading="isLoadingFollow"
        @click="onFollow" >
            {{article.is_followed ? '已关注' : '关注'}}
        </van-button>
      </van-cell>
      <!-- 内容部分 -->
      <div 
      class="markdown-body" 
      v-html="article.content"
      ref="artice-content">
        </div>
         <!-- 文章评论列表 -->
         <comment-list 
         :source="articleId"
         :list="commentList"
         @update-total-count="totleCommentCount = $event"
         @reply-click="onReplyClick"/>
    </div>

       
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

        <van-icon
        class="sum"
        name="comment-o"
        color="#777"
        :info="totleCommentCount"/>

        <van-icon
        :name="article.is_collected ? 'star' : 'star-o'"
        :color="article.is_collected ? 'orange' : '#777'"
        @click="onCollect"/>
        <van-icon
        :name="article.attitude===1 ? 'good-job' : 'good-job-o'"
        :color="article.attitude===1 ? 'skyblue' : '#777'"
        @click="onLike"/>
        <van-icon
        name="share"
        color="#777"/>
    </div>

    <!-- 弹出层 -->
    <van-popup 
    v-model="isPostShow" 
    position="bottom">
    <!-- 发布评论组件 -->
    <post-comment 
    :target="articleId"
    @post-success="onPostSuccess"/>
    </van-popup>

    <!-- 回复组件 -->
    <van-popup 
    v-model="isReplyShow" 
    position="bottom">
    <!-- 评论回复组件 -->
    <!-- 这里v-if 目的是让组件随着弹出层的显示隐藏进行渲染和销毁
         防止加载过的组件不重新渲染，导致数据不会重新加载的问题 -->
    <comment-reply 
    v-if="isReplyShow"
    :comment="replyComment"
    @close="isReplyShow = false"
    :article-id="articleId"
    :post-success="onPostSuccess"/>
    </van-popup>
</div>
</template>
<script>
    import '../styles/github-markdown.css'
    import {getArticleById,
            addCollect,
            deleteCollect,
            addLike,
            deleteLike} from '../api/article'
    import { ImagePreview } from 'vant'
    import {addFollow, deleteFollow  } from "../api/user";
    import commentList from '../components/comment-list.vue'
    import PostComment from '../components/post-comment.vue'
    import CommentReply from '../components/comment-reply.vue'
//  如何在组件中获取动态路由参数
// this.router.params.xxx
// props.传参 
export default {

props:{
    // 在 articleId 中接收动态路由参数
    articleId:{
        type:[Number,String,Object],
        required:true
    }
},
data(){
return {
    // 文章数据对象
    article:{},
    // 关注按钮的 loading 的状态
    isLoadingFollow:false,
    // 收藏的 loading 的状态
    isLoadingCollect:false,
    // 控制发布评论的展示状态
    isPostShow:false,
    // 文章列表数据
    commentList:[],
    // 评论总数
    totleCommentCount : 0,
    // 控制回复状态的显示与隐藏
    isReplyShow:false,
    // 当前评论回复对象
    replyComment:{}
}
},
created() {
    this.loadArticle()
},
methods:{
    // 获取新闻文章数据
   async loadArticle(){
        const {data} = await getArticleById(this.articleId)
        this.article = data.data
       
        this.$nextTick(() => {
            // 调用预览图片方法
           this.perviewImage()
        })
    },
    perviewImage(){
         // 获取文章内容 DOM容器
         const articeContent = this.$refs['artice-content']
          // 得到所有Img标签
         const imgs = articeContent.querySelectorAll('img')
         // 循环img列表，给img绑定点击事件
        const imgPaths = []
        imgs.forEach((img,index) => {
            imgPaths.push(img.src)
            img.onclick=function() {
        // 在事件处理函数中 调用 ImagePreview 函数
                ImagePreview({
                    images: imgPaths,
                    startPosition: index,
                    })
            }
        })
    },
    // 关注用户

   async onFollow() {
    // 请求开始时，开启按钮的 loading 状态
    this.isLoadingFollow = true
        if(this.article.is_followed) {
        // 已关注，取消关注
          await deleteFollow(this.article.aut_id)
        }else {
            // 未关注 进行关注
           await addFollow(this.article.aut_id)
        }
        this.article.is_followed = !this.article.is_followed
        // 请求结束时，关闭按钮的 loading 状态
        this.isLoadingFollow = false
    },
    // 收藏文章

    async onCollect() {
    // 请求开始时，开启收藏的 loading 状态
        this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })
        if(this.article.is_collected) {
        // 已收藏，取消收藏
          await deleteCollect(this.articleId)
        }else {
            // 未收藏 进行收藏
           await addCollect(this.articleId)
        }
        this.article.is_collected = !this.article.is_collected
        // 提示文本
        this.$toast.success(`${this.article.is_collected ?
         '收藏成功' : '取消收藏'} ` )
    },

    // 点赞666 
   async onLike () {
        // 请求开始时，开启收藏的 loading 状态
        this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })
        if(this.article.attitude === 1) {
        // 已点赞，取消点赞
          await deleteLike(this.articleId)
          this.article.attitude = -1
        }else {
            // 未点赞 进行点赞
           await addLike(this.articleId)
           this.article.attitude = 1
        }
        // 提示文本
        this.$toast.success(`${this.article.attitude === 1 ?
         '点赞成功' : '取消点赞'} ` )
    },

    // 发布评论添加到顶部
    onPostSuccess(comment) {
        // console.log(comment);
        // 把发布的评论放到顶部
        this.commentList.unshift(comment)
        // 发布后更新评论数量
        this.totleCommentCount++
        // 发布后关闭弹出框
        this.isPostShow = false
    },

    // 点击回复评论
    onReplyClick(comment) {
        console.log('onRplyClick',comment);
        // 把子组件的 comment 传给父组件
        this.replyComment = comment
        this.isReplyShow = true
    }

},
components:{
    commentList,
    PostComment,
    CommentReply,
},
};
</script>

<style scoped lang='less'>
    .title {
        font-size: 20px;
        padding: 14px;
        color: #3a3a3a;
    } 
    .user-info {
        .avatar {
            width: 35px;
            height: 35px;
            margin-right: 8px;
        }
        .name {
            font-size: 12px;
            color: #333;
        }
        .pabdata {
            font-size: 11px;
            color: #b4b4b4;
        } 
        .fowllow-btn {
            width: 85px;
            height: 29px;
        }
    }
    .markdown-body {
        padding: 14px;
    }
    // 底部区域
    .article-bottom {
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        padding: 10px 15px;
        .comment-btn {
            // width: 100px;
            flex: 40%;
            margin-right: 10px;
        }
        .van-icon {
            position: relative;
            flex: 10%;
        }
        .sum {
            flex: 10%;
            position: relative;
            .van-info {
                font-size: 8px;
                right: 62%;
            }
        }
    }
    .article-wrap {
        position: fixed;
        left: 0;
        right: 0;
        top: 46px;
        bottom: 54px;
        overflow-y: auto;
    }
</style>