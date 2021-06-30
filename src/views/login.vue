<template>
<div>
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
     />
      <!-- 输入框 -->
      <!-- 2、当1表单提交的时候会触发 submit事件 
            只有表单验证通过，它才会调用 submit
            3、使用 Field的 rules 属性定义校验规则
      -->
    <van-form @submit="onLogin"
    :show-error="false"
    :show-error-message="false"
    @failed="onFailed"
    :validate-first="true"
    ref="login-form">
        <van-field 
        v-model="user.mobile" 
        icon-prefix="icon"
        left-icon="shouji" 
        name="mobile"
        center
        placeholder="请输入手机号"
        :rules="formRules.mobile"/>
        <van-field 
        v-model="user.code" 
        icon-prefix="icon"
        left-icon="yanzhengma" 
        clearable
        center
        name="code"
        placeholder="请输入验证码"
        :rules="formRules.code">
        <template #button>
            <van-count-down 
            :time="60 * 1000" 
            format="ss s"
            v-if='isCountDownShow'
            @finish="isCountDownShow=false"/>
           <van-button 
           size="small" 
           v-else
           round class="sent-btn" 
           @click.prevent="onSendSms"
           :loading='isSendSmsLoading'>发送验证码</van-button>
        </template>
        </van-field>
        <!-- 登录按钮 -->
        <div class="login-btn-wrap">
         <van-button type="info" block class="login-btn">登录</van-button>
        </div>
    </van-form>
  
</div>
</template>
<script>
import { login, sendSms} from '../api/user'
import {Toast} from 'vant'
export default {

props:{

},
data(){
return {
    user:{
        mobile:'',
        code:''
    },
    formRules:{
        mobile:[
            { required: true, message: '请填写手机号' },
            {pattern:/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[36578]|18[0-9]|14[57])[0-9]{8}$/,message:'手机号格式错误'}
        ],
        code:[
            { required: true, message: '请填写验证码' },
            {pattern:/^\d{6}$/,message:'验证码格式错误'}
        ]
    },
    isCountDownShow:false,
    // 发送验证码的 loading 状态
    isSendSmsLoading:false,
}
},
methods:{
   async onLogin(){
        Toast.loading({
          message: '登录中...',
          forbidClick: true,
        })
        // 1、找到数据接口
        // 2、封装请求方法
        // 3、请求调用登录
     try{
        const res = await login(this.user)
        // console.log(res);
        this.$toast.success('登录成功')
        
        this.$store.commit('setUser',res.data.data)

        // 清除 layout 的缓存,来让它重新渲染
        this.$store.commit('removeCachePage','LatoutIndex')

        // 登陆成功后，跳转回原来页面
        // this.$router.back()
        this.$router.push(this.$route.query.redirect || '/')
     }catch(err) {
         Toast.fail('登录失败')
         console.log(err);
     }
        // 4、处理响应结果
    },
    // 错误提示
    onFailed(err) {
        console.log(err);
        if(err.errors[0].message) {
            this.$toast({
                message:err.errors[0].message,
                position:'top'
            })
        }
    },
   async onSendSms() {
        // 校验手机号码
      try{
       await this.$refs['login-form'].validate('mobile')
        // console.log(validateRet);
        // 通过后发送验证码
        this.isSendSmsLoading = true  // 防止慢网络用户多次点击
       const res = await sendSms(this.user.mobile)
       console.log(res);
        //    显示倒计时
        // 倒计时结束 显示发送验证码
        this.isCountDownShow = true
        // 隐藏倒计时，显示发送按钮 用failed事件处理
      } catch(err){
        //   console.dir(error)
        let message=''
        if(err && err.response && err.response.status===429) {
            // 发送短信频繁的提示
            message='短信发送频繁，请等会'
        }else if(err.name="mobile") {
            // 表单验证失败的提示
            message=err.message                                    
        }else {
            message='请求失败重新验证'
        }
        this.$toast({
                message, // 提示消息
                position:'top'
            })
      }
    //   无论成功失败 都要关闭发送按钮的 loading 状态
    this.isSendSmsLoading = false
        // 验证通过 -> 请求发送验证码 ->用户接受短信 ->输入验证码->请求登录
        // 请求发送验证码 ->显示倒计时
    }
},
components:{

},
};
</script>

<style scoped lang='less'>
    body {
        background-color: #f5f7f9;
    }
        .login-btn-wrap{
            padding: 26px 16px;
            .login-btn{
               background-color: #6db4fb;
               border: none;
               .van-button__text {
                   font-size: 15px;
               }
            }
        }
        .sent-btn {
            width: 76px;
            height: 23px;
            background-color: #ededed;
            .van-button__text{
                font-size: 11px;
                color: #666;
            }
        }
</style>