<template>
<div>
    <!-- <div class="article-item"></div> -->
    <van-cell class="article-item"
    :to="{
        name:'article',
        params:{
            articleId: article.art_id
        }
    }">
    <!-- 动态路由传参 -->
        <div slot="title"
        class="van-multi-ellipsis--l3">{{article.title}}</div>
        
        <div slot="label">
            <div class="cover-wrap"
            v-if="article.cover.type === 3">
                <div class="cover-wrap-item"
                v-for="(img,index) in article.cover.images"
                :key="index">
                <van-image 
                fit="cover"
                class="cover-item"
                :src="img" />
            </div>
            </div>
            <div class="label-wrap">
                <span>{{article.aut_name}}</span>
                <span>{{article.comm_count}}评论</span>
                <span>{{article.pubdate | relativeTime}}</span>
            </div>
        </div>
        <!-- 默认插槽名字 default 可省略不写 -->
        <van-image 
        v-if="article.cover.type === 1"
        fit="cover"
        :src="article.cover.images[0]" />
    </van-cell>
</div>
</template>
<script>

export default {
name:'ArticleItem',
props:{
    article:{
        type:Object,
        required:true
    }
},
data(){
return {

}
},
methods:{

},
components:{

},
};
</script>

<style scoped lang='less'>
    .article-item {
        .title{
            font-size: 16px;
            color:#3a3a3a;
        }
       /deep/ .van-cell__value {
            flex: unset;
            width: 116px;
            height: 73px;
        }
        .cover-wrap {
            display: flex;
            .cover-wrap-item{
                flex: 1;
                height: 73px;
                &:not(:last-child) {
                    padding-right: 5px;
                }
                .cover-item {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .label-wrap {
            font-size: 11px;
            color: #b4b4b4;
            span {
                margin-right: 12px;
            }
        }
    }
</style>