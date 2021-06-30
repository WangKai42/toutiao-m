<template>
<div class="my-container">
   <!--  <div class="user-info">
        <div class="base-info"></div>
        <div class="data0info"></div>
    </div> -->
    <van-cell-group class="my-info" v-if="user">
      <van-cell 
      class="base-info"
      title="单元格" 
      value="内容"
      :border="false"
      center >
      <van-image
      class="avatar"
        round
        fit="cover"
        slot="icon"
        :src="currentUSer.photo"/>
        <div class="name" slot="title"> {{currentUSer.name}}</div>
       <van-button
       class="updata-btn"
       size="small"
       round
       to="/user-profile">编辑资料</van-button>
      </van-cell>
      <van-grid :border="false" class="data-info">
        <van-grid-item text="文字" class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUSer.art_count}} </div> 
            <div class="text">头条</div>
          </div>
        </van-grid-item> 
        <van-grid-item text="文字" class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUSer.follow_count}} </div> 
            <div class="text">关注</div> 
          </div>
        </van-grid-item> 
        <van-grid-item text="文字" class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUSer.fans_count}}</div>
            <div class="text">粉丝</div> 
          </div>
        </van-grid-item> 
        <van-grid-item text="文字" class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUSer.like_count}} </div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!-- 退出登录时的显示 -->
    <div class="not-login" v-else>
      <div @click="$router.push({
        name:'login',
        query:{
          redirect:'/my'
        }
      })">
        <img src="./images/shouji.png" alt="" class="mobile"/>
      </div>
      <div class="text">登录 / 注册</div>
    </div>
<!-- 关注历史 -->
    <van-grid :column-num="2" class="nav-grid mb-4">
      <van-grid-item 
      icon-prefix="icon" 
      icon="shoucang"
      text="收藏"
      class="nav-grid-item" />
      <van-grid-item 
      icon-prefix="icon" 
      icon="lishi" 
      text="历史"
      class="nav-grid-item" />
    </van-grid>
    <!-- 页面跳转 -->
    <van-cell title="消息通知" is-link url="/" />
    <van-cell title="小智同学" is-link to="/user-chat" class="mb-4"/>
    <van-cell 
    v-show="!isLoginShow"
    title="退出登录" 
    class="logout-cell" 
    @click="onLogout"/>
</div>
</template>
<script>

import { mapState } from 'vuex'

import {getCurrentUser} from '../api/user'

export default {

props:{

},
created(){
  this.loadCurrentUser()
},
data(){
return {
  // 当前登录用户信息
  currentUSer:{},
  isLoginShow:false
}
},
methods:{
  // 退出登录
  onLogout() {
    // 提示用户是否退出
    this.$dialog.confirm({
      title: '退出提示',
      message: '是否确认退出'
    })
      .then(() => {
        // 确认退出时，清除登录状态
        this.$store.commit('setUser',null)
        this.isLoginShow = true
      })
      .catch(() => {
        // on cancel
      });
    },
   async loadCurrentUser() {
      const {data} = await getCurrentUser()
      // console.log(data);
      this.currentUSer = data.data
      // console.log(this.currentUSer);
    }
},
computed:{
  ...mapState(['user'])
},

components:{

},
};
</script>

<style scoped lang='less'>
  .my-container {
    background-color: #f2f2f2;
    .my-info{
      background: url('./images/banner.png') no-repeat;
      background-size: cover;
    }
    .base-info{
      box-sizing: border-box;
      height: 115px;
      padding-top: 38px;
      padding-bottom:11px;
      background-color: unset;
      .avatar{
        width: 66px;
        height: 66px;
        margin-right: 11px;
        box-sizing: border-box;
        border: 1px solid white;
      }
      .name{
        font-size: 15px;
        color: #fff;
      }
      .updata-btn{
        height: 16px;
        font-size: 10px;
        color: #666;
      }
    }
    .data-info{
      .data-info-item{
        height: 65px;
        color: white;
        .text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        .count{
          font-size: 18px;
        }
        .text{
          font-size: 12px;
        }
      }
      }
    }
    .not-login {
      height: 180px;
      background: url('./images/banner.png');
      background-size: cover;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .mobile{
        width: 66px;
        height: 66px;
        margin-bottom: 8px;
      }
      .text{
        font-size: 14px;
        color: #fff;
      }
    }
   /deep/ .van-grid-item__content {
      background-color: unset;
    }

    /deep/ .nav-grid{
      .nav-grid-item{
        height: 70px;
      }
      .icon {
        font-size: 22px;
      }
      .icon-shoucang {
        color: #eb5253;
        
      }
      .icon-lishi {
        color: #ff9d3d;
      }
      .van-grid-item__text{
        font-size: 14px;
        color: #333;
      }
    }
    .logout-cell {
      text-align: center;
      color: #d86262
    }
    .mb-4 {
      margin-bottom: 4px;
    }
  }
</style>