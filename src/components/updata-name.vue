<template>
<div class="updata-nama">
    <!-- 导航栏 -->
    <van-nav-bar
      title="修改昵称"
      left-text="取消"
      right-text="完成" 
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
    <!-- 输入框 -->
    <van-field
    v-model="message"
    rows="2"
    autosize
    type="textarea"
    maxlength="16"
    placeholder="请输入昵称"
    show-word-limit
    />
</div>
</template>
<script>
import {updataUserProfile} from '../api/user'
export default {

props:{
    name:{
        type:String,
        required:true
    }
},
data(){
return {
    message:this.name
}
},
methods:{
   async onConfirm() {
    this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })
      try{
            // 提交修改用户昵称
        await updataUserProfile({
            name:this.message
        })
            // 更新成功 --> 修改父组件昵称 --> 关闭
            this.$toast.success('修改成功')
            // 修改父组件昵称
            this.$emit('updata-name',this.message)
            this.$emit('close')
      }catch(err) {
        if(err && err.response && err.response.status === 409) {
            this.$toast.fail('该昵称已存在')
        }
      }
    }
    
},
components:{

},
};
</script>

<style scoped lang='less'>
    .van-field{
        padding: 10px;
    }
</style>