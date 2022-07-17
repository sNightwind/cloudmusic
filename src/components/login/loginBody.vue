<template>
  <div class="loginBody">
    <van-tabs v-model:active="activeName" swipeable>
      <van-tab title="验证码登录" name="phone">
        <loginWithPhone></loginWithPhone>
      </van-tab>
      <van-tab title="密码登录" name="password">
        <loginWithPassword></loginWithPassword>
      </van-tab>
      <van-tab title="二维码登录" name="qrcode">
        <loginWithQRCode></loginWithQRCode>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import loginWithPhone from "@/components/login/loginWithPhone.vue";
import loginWithPassword from "@/components/login/loginWithPassword.vue";
import loginWithQRCode from "@/components/login/loginWithQRCode.vue";
export default {
  name: "loginBody",
  components: {
    loginWithPhone,
    loginWithPassword,
    loginWithQRCode,
  },
};
</script>