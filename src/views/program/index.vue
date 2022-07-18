<template>
  <div>
    <div
      class="program"
      v-if="detail"
      v-for="(items, index) in program"
      :key="index"
    >
      <van-image
        width="10rem"
        height="10rem"
        fit="contain"
        :src="items.userProfile.avatarUrl"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { getDjDetail } from "@/api/command";
import { Dialog } from "vant";
export default {
  name: "Detail",
  data() {
    return {
      detail: {},
      program: [],
    };
  },
  async created() {
    console.log("rid:" + this.$route.params.rid);
    let detail = await getDjDetail(this.$route.params.rid);
    this.program = detail.data.data.commentDatas;

    if (detail == null || detail == undefined) {
      Dialog.alert({
        title: "加载失败",
        message: "对不起，数据加载失败，请重试！",
      })
        .then(() => {
          this.$router.push("/home");
        })
        .catch(() => {
          window.close();
        });
    }
    this.detail = detail;
    //    console.log(this.detail);
    // console.log(detail.data.data);
    // console.log(detail.data.data.commentDatas.userProfile);
  },
};
</script>
