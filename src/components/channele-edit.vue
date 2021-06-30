<template>
<div class="channele-edit">
    <!-- 我的频道 -->
    <van-cell center :border="false">
        <div slot="title"
        class="channele-title"> 我的频道</div>
        <van-button
        type="danger"
        plain
        round
        size="mini"
        @click="isEdit = !isEdit">
        {{isEdit? '完成' : '编辑'}}</van-button>
    </van-cell>
   <!-- 宫格 -->
    <van-grid :gutter="10">
      <van-grid-item 
        :class="{active : index === active}"
        v-for="(channel,index) in userChannels"
        :key="index" 
        :icon="(isEdit && index!==0) ? 'clear' : '' "
        :text="channel.name"
        @click="onUserChannelClick(channel,index)"/>
    </van-grid>
    <!-- 频道推荐 -->
    <van-cell center :border="false">
        <div slot="title"
        class="channele-title">频道推荐</div>
    </van-cell>
   <!-- 宫格 -->
    <van-grid :gutter="10">
      <van-grid-item 
        v-for="(channel,index) in recommendChannels"
        :key="index"
        :text="channel.name"
        @click="add(channel)"/>
    </van-grid>
</div>
</template>
<script>
import { getAllChannels,
        addUserChannel,
        deleteUserChannel } from '../api/channel'
import {mapState} from 'vuex'
import {setItem} from '../utils/storage'
export default {

props:{
    'user-channels':{
        type:Array,
        equired:true
    },
    active: {
        type:Number,
        equired:true
    }
},
data(){
return {
    // 所有频道数据
    allChannels:[],
    // 控制删除频道的显示隐藏
    isEdit:false
}
},
created() {
    this.loadAllChannels()
},
methods:{
   async loadAllChannels() {
    const { data } = await getAllChannels()
    this.allChannels = data.data.channels
    },
    // 将推荐频道添加到我的频道
   async add(channel) {
        this.userChannels.push(channel)
        // ToDO 数据持久化
        if(this.user) {
            // 登录了数据存储到线上
          await addUserChannel(
               {
                channels: [
                    {id: channel.id, seq: this.userChannels.length}
                ]
               })
        }else{
            // 未登录数据存储到本地
            setItem('user-channels',this.userChannels)
        }
    },
    // 编辑与切换频道
    onUserChannelClick(channel, index) {
        if(this.isEdit && index !==0) {
            // 编辑状态 进行删除操作
            this.deleteChannel(channel, index)
        }else {
            // 切换操作
            this.switchChannel(index)
        }
    },
    // 编辑状态 进行删除操作
   async deleteChannel(channel, index) {
        // 如果删除当前激活频道之前的频道 
        if(index <= this.active) {
            // 更新当前激活频道的索引
            this.$emit('switch',this.active - 1)
        }
        this.userChannels.splice(index,1)

        // 数据持久化
        if(this.user) {
            // 登陆了保存在线上
           await deleteUserChannel(channel.id)
        }else {
            // 未登录状态 保存在本地
            setItem('user-channels',this.userChannels)
        }
    },
    // 切换操作
    switchChannel(index){
        // 切换选中频道
        this.$emit('switch',index)
        // 自定义事件传给父组件 关闭弹出层
        this.$emit('close')
    }
},
// 计算属性会根据内部依赖属性的变化而重新求值
computed : {
    //  把用户 user 映射到本地
    ...mapState(['user']),
    // 推荐的频道列表
    recommendChannels () {
        // 所有频道 - 我的频道 = 剩余的推荐频道
        // filter 方法过滤数据 根据返回的布尔值 来收集数据
        // filter 查找满足条件的所有元素
        return this.allChannels.filter(channel =>{
            // 判断 channel 是否数据 用户频道
            // find 查找满足条件的 单个 元素
            return  !this.userChannels.find(userChannels=>{
                // 找到满足条件的元素
                return userChannels.id === channel.id
            })
        })
    },
},
components:{

},
};
</script>

<style scoped lang='less'>
    .channele-edit {
        padding-top: 54px;
        .channele-title {
            font-size: 16px;
            color: #333;
        }
        .van-grid-item {
            width: 80px;
            height: 43px;
            /deep/ .van-grid-item__content {
                background-color: #f4f5f6;
                .van-grid-item__text {
                    font-size: 14px;
                    color: #222;
                    margin-top: 0;
                }
            }
           /deep/ .van-grid-item__icon {
            position: absolute;
            top: -5px;
            right: -7px;
            font-size: 20px;
            color: #ccc;
            }
        }
        .active {
            /deep/ .van-grid-item__text {
                color: red !important;
            }
        }
    }
</style>