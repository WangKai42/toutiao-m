<template>
<div>
   <img :src="image" ref="image" class="image">
   <van-nav-bar 
    left-text="取消"
    right-text="完成"
    @click-left="$emit('close')"
    @click-right="onConfirm"
   />
</div>
</template>
<script>
import {editUserPhoto} from '../api/user'
import 'cropperjs/dist/cropper.css'
import Cropper from 'cropperjs'
export default {

props:{
    file:{
        type:[Object,File],
        required:true
    }
},
data(){
return {
    image:window.URL.createObjectURL(this.file),
    // 图片裁切
    cropper:null  
}
},
mounted () {
  const image = this.$refs.image
  this.cropper = new Cropper(image,{
    viewMode: 1,
    dragMode: 'move',
    aspectRatio: 1,
    cropBoxMovable: false,
    cropBoxResizable: false,
    background: false,
    movable: true
  })
//   console.log(cropper);
},
methods:{
    // 裁切图片
    getCroppedCanvas() {
        return new Promise(resolve =>{
            this.cropper.getCroppedCanvas().toBlob((blob)=>{
                resolve(blob)
            })
        })
    },
    // 发送请求
    async onConfirm() {
    this.$toast.loading({
            message:'操作中...',
            forbidClick:true // 禁止背景点击
        })

        const file = await this.getCroppedCanvas()
        let fd = new FormData()
        fd.append('photo',file)

        // 提交修改用户头像
        /*如果要求 Content-Type 是	multipart/form-data
            则要提交 FromData 数据对象是专门文件上传的 不能提交{} */

       /*  let fd = new FormData()
        fd.append('photo',this.file) */

       await editUserPhoto(fd)
        this.$toast('修改成功') 
         // 修改父组件昵称
        this.$emit('updata-photo',window.URL.createObjectURL(file))
        this.$emit('close')  
    }
},
components:{

},
};
</script>

<style scoped lang='less'>
   /deep/ .van-nav-bar__content {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #000;
    }
    .image {
        display: block;
        max-width: 100%;
    }
</style>