<template>
  <div>
    <van-swipe lazy-render>
      <van-swipe-item>
        <img
          :src="user.profile.backgroundUrl"
        /><!--ImagePreview 图片预览(待实现)-->
      </van-swipe-item>
    </van-swipe>

    <div class="profile">
      <div class="profileInfo">
        <img class="profileImg" :src="user.profile.avatarUrl" />
        <span class="profileName">{{ user.profile.nickname }}</span>
      </div>
      <van-row class="coloum" justify="center" gutter="20">
        <van-col span="5" @click="$router.push('/follows')"
          >{{ user.profile.follows }} 关注</van-col
        >
        <van-col span="5" @click="$router.push('/followed')"
          >{{ user.profile.followeds }} 粉丝</van-col
        >
        <van-col span="5">LV.{{ user.level }}</van-col>
      </van-row>
    </div>

    <van-tabs
      v-model:active="activeName"
      swipeable
      ref="tabs"
      @click-tab="test"
    >
      <van-tab title="主页" name="phone">
        <MyBodyIndex></MyBodyIndex>
      </van-tab>
      <van-tab
        title="动态"
        name="password"
        :badge="events.size"
        show-zero-badge="false"
      >
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
.profile {
  .profileInfo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .profileImg {
      width: 20%;
      height: 20%;
      border-radius: 50%;
    }
    .profileName {
      font-weight: 700;
      font-size: 20px;
    }
  }

  .coloum {
    text-align: center;
  }
}
.van-tabs__content {
  height: 300px;
}
</style>
<script>
import MyBodyIndex from "@/components/my/MyBodyIndex.vue";
import MyBodyTrends from "@/components/my/MyBodyTrends.vue";
import MyBodyBroadcast from "@/components/my/MyBodyBroadcast.vue";
import { getUserTrends } from "@/request/api/my.js";
export default {
  template: {
    MyBodyIndex,
    MyBodyTrends,
    MyBodyBroadcast,
  },
  data() {
    return {
      user: {},
      events: {},
    };
  },
  async created() {
    try {
      //从本地获取userDetail信息
      let tempUser = JSON.parse(localStorage.getItem("user"));
      if (tempUser != null) {
        this.user = tempUser;
        let events = await getUserTrends(this.user.profile.userId);
        this.events = events.data;
        // console.log(events.data);
      }
      //   console.log(tempUser);
    } catch (error) {
      console.error("获取本地user出错");
    }
  },
  methods: {
    test: function () {
      console.log("点击重载tab 高度异常");
      // this.$refs.tabs.resize();
    },
  },
};
</script>
