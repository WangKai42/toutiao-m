<template>
<div>
    <van-datetime-picker
    v-model="defaultBrithday"
    type="date"
    title="选择年月日"
    :min-date="minDate"
    :max-date="maxDate"
    @cancel="$emit('close')"
    @confirm="onConfirm"
    @change="onBrithdayChange"
    />
</div>
</template>
<script>
import {updataUserProfile} from '../api/user'
export default {

props:{
    value:{
        type:String,
        required:true
    }
},
data(){
return {
    defaultBrithday:new Date(this.value),
    minDate: new Date(1990, 0, 1),
    maxDate: new Date(),
    // currentDate: new Date(2021, 0, 17)
}
},
methods:{
    // 选项改变时触发  picker: Picker 实例
    onBrithdayChange(picker) {
        this.defaultBrithday = picker
    },
     // 发送修改请求
     async onConfirm() {
    this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })
        const date = `${this.defaultBrithday.getFullYear()}-${this.defaultBrithday.getMonth()+1}-${this.defaultBrithday.getDate()}`
          // 提交修改用户性别
          await updataUserProfile({
            birthday:date
        })
            // 更新成功 --> 修改父组件性别 --> 关闭
            this.$toast.success('修改成功')
            // 修改父组件性别 v-model 监听 默认input事件
            this.$emit('input',date)
            this.$emit('close')
    }
    
},
components:{

},
};
</script>

<style scoped lang='less'>

</style>