<template>
<div>
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
      title="小智同学"
      left-arrow 
      @click-left="$router.back()"/>

      <!-- 消息列表 -->
    <van-cell-group class="message-list" ref="message-list">
        <van-cell 
        :title="item.msg"
        v-for="(item,index) in messages"
        :key="index"/>
        
    </van-cell-group>

    <!-- 发送消息 -->
    <van-cell-group class="send">
        <van-field 
        v-model="message" 
        :border="false"
        placeholder="请输入消息" />
        <van-button 
        size="small"
        type="primary"
        @click="onSend">发送</van-button>
    </van-cell-group>
</div>
</template>
<script>
import io from "socket.io-client"
import {setItem,getItem} from '../utils/storage'

export default {

props:{

},
data(){
return {
    message:'',
    socket:null,
    // 消息列表
    messages:getItem('toutiao-message') ||[]
}
},
watch: {
    messages() {
        setItem('toutiao-message',this.messages)
        
        this.$nextTick(() => {
            this.scrollToBottom()  
        })
    }
    
},
created () {
    // 建立连接
    const socket = io("http://ttapi.research.itcast.cn/")
    this.socket = socket
    // 当客户端与服务器建立连接成功，触发 connect 事件
    socket.on('connect', () => {
        console.log('建立连接成功！')
        })

    // 监听接收服务端消息
    socket.on('disconnect',() => {
        console.log('断开链接了....')
    })

    // / 监听接收服务端消息
    socket.on('message', data => {
        // 把对方发的消息保存
        this.messages.push(data)
   })

},
methods:{
    onSend() {
        // 请求发送消息
        const data = {
            msg:this.message,
            timestamp:Date.now()
        }
        this.socket.emit('message',data)
        // 把用户发送的消息添加到数组中
        this.messages.push(data)
        this.message = ''
    },
    // 滚动到底部
    scrollToBottom() {
        const list = this.$refs['message-list']
        list.scrollTop = list.scrollHeight
    }
},
mounted () {
    this.scrollToBottom()  
},
components:{

},
};
</script>

<style scoped lang='less'>
    .send{
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        padding: 15px;
        align-items: center;
    }
    .message-list{
        position: fixed;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 72px;
        overflow-y: auto;
    }
</style>