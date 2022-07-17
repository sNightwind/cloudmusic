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
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          @click="login"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "loginWithPassword",
  data() {
    return {
      phone: "19122130199",
      password: "yY123456.",
    };
  },
  methods: {
    login: async function () {
      console.log(this.phone + " " + this.password);
      let res = await this.$store.dispatch("getLoginByPhoneAndPassword", {
        phone: this.phone,
        password: this.password,
      });
      if (res.data.code == 200) {
        //登录成功
        this.$store.commit("updateLoginStatus", true);
        this.$router.push("/my");
      } else {
        Toast.fail(res.data.message);
      }
      // console.log(res);
    },
  },
};
</script>