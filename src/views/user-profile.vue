<template>
<div class="user-profile">
    
   <!-- 导航栏 -->
   <van-nav-bar
      class="app-nav-bar"
      title="修改资料"
      left-arrow
      @click-left="$router.back()" />

        <!--  -->
        <input type="file" 
        hidden ref="file" 
        accept="image/*"
        @change="onFileChange"
        >
      <van-cell title="头像" 
      is-link center
      @click="$refs.file.click()"
      >
        <van-image
            width="30"
            height="30"
            round
            :src="user.photo"
        />
      </van-cell>

      <van-cell 
      title="昵称" 
      is-link 
      :value="user.name"
      @click="isEditNameShow=true"
      />
      
      <van-cell 
      title="性别" 
      is-link 
      :value="user.gender===0 ? '男' : '女' "
      @click="isEditGenderShow = true"
      />

      <van-cell 
      title="生日" 
      is-link 
      :value="user.birthday"
      @click="isEditBrithdayShow=true"
      />
      <!-- 弹出层 -->
        <!-- 昵称 -->
        <van-popup 
        v-model="isEditNameShow" 
        position="bottom" 
        :style="{ height: '100%' }"
        >
            <updata-name 
            v-if="isEditNameShow"
            @close="isEditNameShow=false"
            :name="user.name"
            @updata-name="user.name = $event"
            />
        </van-popup>
        <!-- 性别 -->
        <van-popup 
        v-model="isEditGenderShow" 
        position="bottom" 
        >
            <updata-gender
            v-model="user.gender"
            @close="isEditGenderShow = false" 
            />

        </van-popup>

        <!-- 生日 -->
        <van-popup 
        v-model="isEditBrithdayShow" 
        position="bottom" 
        >
            <updata-brithday
            v-if="isEditBrithdayShow"
            v-model="user.birthday"
            @close="isEditBrithdayShow = false" 
            />
        </van-popup>

         <!-- 头像 -->
         <van-popup 
         class="edit-photo"
        v-model="isEditPhotoShow" 
        position="bottom" 
        style="height:100%"
        >
          <updata-photo
          v-if="isEditPhotoShow"
          @updata-photo="user.photo = $event"
          :file="previewImage"
          @close="isEditPhotoShow = false"
           />
        </van-popup>
</div>
</template>
<script>
import {getUserProfile} from '../api/user'
import UpdataName from '../components/updata-name.vue'
import UpdataGender from '../components/updata-gender.vue'
import UpdataBrithday from '../components/updata-brithday.vue'
import UpdataPhoto from '../components/updata-photo.vue'
export default {

props:{

},
data(){
return {
    // 用户数据对象
    user:{},
    // 修改昵称的弹出层
    isEditNameShow:false,
    // 修改性别弹出层
    isEditGenderShow:false,
    // 修改生日弹出
    isEditBrithdayShow:false,
    // 修改头像弹出层
    isEditPhotoShow:false,
    // 上传预览图片
    previewImage:null
}
},
created () {
  this.loadUserProfile()  
},
methods:{
   async loadUserProfile() {
    const {data} = await getUserProfile()
    this.user = data.data 
    },
    // 换头像
    onFileChange() {
        // 在弹出层里预览图片
        // const blob = window.URL.createObjectURL(this.$refs.file.files[0])
        const file = this.$refs.file.files[0]
        // 接受文件对象，发布传
        this.previewImage = file
        // 为了解决选择同一张图片，不能触发事件

        // 展示弹出层
        this.isEditPhotoShow = true
        // 所有要清空 flie 的 value
        this.$refs.file.value = ''
    }
},
components:{
    UpdataName,
    UpdataGender,
    UpdataBrithday,
    UpdataPhoto
},
};
</script>

<style scoped lang='less'>
    .van-popup {
        background-color: #f5f7f9;
    }
    .edit-photo {
        background-color: #000;
    }
</style>