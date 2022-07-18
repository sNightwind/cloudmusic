<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-rili"></use>
      </svg>
      <span @click="jumpToCommend">电台推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouyinji"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paixingbang"></use>
      </svg>
      <span @click="jumpToArtisit">歌手榜</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  methods: {
    jumpToCommend() {
      this.$router.push("/command");
    },
    jumpToArtisit() {
      this.$router.push("/artists");
    },
  },
};
</script>
<style lang="less" scoped>
.iconList {
  width: 100%;
  height: 2rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .iconItem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
