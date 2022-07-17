<template>
  <div class="loginBody">
    <van-tabs v-model:active="activeName" swipeable>
      <van-tab title="手机号登录" name="phone">
        <loginWithPhone></loginWithPhone>
      </van-tab>
      <van-tab title="邮箱登录" name="email">
        <loginWithEmail></loginWithEmail>
      </van-tab>
      <van-tab title="二维码登录" name="qrcode">
        <loginWithQRCode></loginWithQRCode>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import loginWithPhone from "@/components/login/loginWithPhone.vue";
import loginWithEmail from "@/components/login/loginWithEmail.vue";
import loginWithQRCode from "@/components/login/loginWithQRCode.vue";
export default {
  name: "loginBody",
  components: {
    loginWithPhone,
    loginWithEmail,
    loginWithQRCode,
  },
};
</script>