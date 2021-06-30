<template>
<div>
    <van-picker
        show-toolbar
        :columns="columns"
        :default-index="defaultIndex"
        @cancel="$emit('close')"
        @confirm="onConfirm"
        @change="onGenderChange"
    />
</div>
</template>
<script>
import {updataUserProfile} from '../api/user'
export default {

props:{
    value:{
        type:Number,
        required:true
    }
},
data(){
return {
    columns: ['男','女'],
    defaultIndex:this.value
}
},
methods:{
    // 选项改变时触发  单列：Picker 实例，选中值，选中值对应的索引
    onGenderChange(picker,value,index) {
        this.defaultIndex = index
    },

    // 发送修改请求
    async onConfirm() {
    this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })
          // 提交修改用户性别
          await updataUserProfile({
            gender:this.defaultIndex
        })
            // 更新成功 --> 修改父组件性别 --> 关闭
            this.$toast.success('修改成功')
            // 修改父组件性别 v-model 监听 默认input事件
            this.$emit('input',this.defaultIndex)
            this.$emit('close')
    }
    
},
components:{

},
};
</script>

<style scoped lang='less'>

</style>