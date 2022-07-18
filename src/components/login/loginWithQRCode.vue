<template>
  <div>
    <div class="QrCode">
      <img :src="QrCode.qrimg" />
      <button @click="checkQrCodeStatus">检测二维码状态</button>
      <button @click="refreshQrCode">刷新二维码</button>
    </div>
  </div>
</template>
<script>
import { getQRCodeKey, getQRCode, checkQRCode } from "@/request/api/login.js";
export default {
  name: "loginWithQRCode",
  data() {
    return {
      key: "",
      QrCode: "",
    };
  },
  watch: {
    key: async function () {
      // console.log("我正在被自动执行");
      let res2 = await getQRCode({
        key: this.key,
        timestamp: new Date().getTime(),
      });
      if (res2.data.code == 200) {
        this.QrCode = res2.data.data;
      } else {
        console.log(res2);
        alert("获取二维码失败，请刷新重试");
      }
    },
  },
  async created() {
    let res = await getQRCodeKey({
      timestamp: new Date().getTime(),
    });
    // console.log(res);
    if (res.data.code == 200) {
      //取得qrkey成功
      this.key = res.data.data.unikey;
      //获取到key 发送请求获取QRCode
      let res2 = await getQRCode({
        key: this.key,
        timestamp: new Date().getTime(),
      });
      if (res2.data.code == 200) {
        this.QrCode = res2.data.data;
      } else {
        console.log(res2);
        alert("获取二维码失败，请刷新重试");
      }
    } else {
      alert("获取二维码key失败，请刷新重试");
    }
  },
  methods: {
    checkQrCodeStatus: async function () {
      console.log(this.key);
      let res = await checkQRCode({
        key: this.key,
        timestamp: new Date().getTime(),
      });
      if (res.status == 200) {
        alert(res.data.message);
      }
      console.log(res);
    },
    refreshQrCode: async function () {
      console.log("old:" + this.key);
      let res = await getQRCodeKey({
        timestamp: new Date().getTime(),
      });
      console.log("new:" + res.data.data.unikey);
      if (res.data.code == 200) {
        //取得qrkey成功
        this.key = res.data.data.unikey;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.QrCode {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 80%;
  }
}
</style>