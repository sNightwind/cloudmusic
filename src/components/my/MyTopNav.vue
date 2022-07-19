<template>
  <div class="topNav">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao" v-if="$store.state.isLogin"></use>
        <use xlink:href="#icon-tuichu" v-else></use>
      </svg>
    </div>
    <div class="topContent">
      <span @click="$router.push('/my')" class="active">我的</span>
      <span @click="$router.push('/')">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>
<style lang="less" scoped>
.topNav {
  width: 100%;
  height: 1rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .topContent {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    // align-items: center;
    font-size: 0.36rem;

    .active {
      font-weight: 900;
    }
  }
}
</style>
<script>
export default {
  template: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
