<template>
  <div>
    <van-swipe lazy-render>
      <van-swipe-item>
        <img :src="user.profile.backgroundUrl" />
      </van-swipe-item>
    </van-swipe>
    <div>头像+简介</div>
    <van-tabs v-model:active="activeName" swipeable>
      <van-tab title="主页" name="phone">
        <MyBodyIndex></MyBodyIndex>
      </van-tab>
      <van-tab title="动态" name="password">
        <MyBodyTrends></MyBodyTrends>
      </van-tab>
      <van-tab title="博客" name="qrcode">
        <MyBodyBroadcast></MyBodyBroadcast>
      </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="less">
.van-swipe {
  width: 100%;
  height: 3rem;
  .van-swipe-item {
    padding: 0 0.2rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
  }
}
</style>
<script>
import MyBodyIndex from "@/components/my/MyBodyIndex.vue";
import MyBodyTrends from "@/components/my/MyBodyTrends.vue";
import MyBodyBroadcast from "@/components/my/MyBodyBroadcast.vue";
export default {
  template: {
    MyBodyIndex,
    MyBodyTrends,
    MyBodyBroadcast,
  },
  data() {
    return {
      user: {},
    };
  },
  created() {
    try {
      //从本地获取userDetail信息
      let tempUser = JSON.parse(localStorage.getItem("user"));
      if (tempUser != null) {
        this.user = tempUser;
      }
      console.log(tempUser);
    } catch (error) {
      console.error("获取本地user出错");
    }
  },
};
</script>
