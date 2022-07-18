<template>
  <div>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="phone"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />
        <van-field
          v-model="sms"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
          <template #button>
            <van-count-down
              :time="1000 * 60"
              format="ss s"
              v-if="isDataShow"
              @finish="isDataShow = false"
            />
            <van-button
              v-else
              size="small"
              type="primary"
              @click="getCaptchaCode"
              >发送验证码</van-button
            >
          </template>
        </van-field>
      </van-cell-group>
      <div v-show="isDataShow">验证码已发送，10分钟内有效</div>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          @click="loginByPhoneAndCaptchaCode"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { getUserDetail } from "@/request/api/my.js";
export default {
  name: "loginWithPhone",
  data() {
    return {
      phone: "19122130199",
      sms: "",
      isDataShow: false,
    };
  },
  methods: {
    getCaptchaCode: async function () {
      // console.log(this.phone);
      try {
        let res = await this.$store.dispatch("getCaptchaCode", {
          phone: this.phone,
        });
        if (res.data.code == 200) {
          //发送成功
          this.isDataShow = true;
        } else if (res.data.code == 400) {
          // this.$toast({
          //   message: "顶部展示",
          //   position: "top",
          // });
          alert(res.data.message);
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        alert(error);
      }
    },
    loginByPhoneAndCaptchaCode: async function () {
      // console.log(this.phone + " " + this.sms);
      try {
        let res = await this.$store.dispatch("getLoginByPhoneAndCaptchaCode", {
          phone: this.phone,
          code: this.sms,
        });
        if (res.data.code == 200) {
          //登录成功
          this.$store.commit("updateLoginStatus", true);
          this.$store.commit("updateToken", res.data.token);
          //获取用户详情

          let userResponse = await getUserDetail(res.data.account.id);
          // console.log(userResponse);

          this.$router.push("/my");
        } else {
          alert(res.data.message);
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
