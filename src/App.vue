<template>
  <router-view />
  <FooterMusic v-show="$store.state.isFooterMusic" />
</template>
<script>
import FooterMusic from "@/components/home/item/FooterMusic.vue";
export default {
  name: "app",
  components: {
    FooterMusic,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 0.5rem;
  height: 0.5rem;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
main {
  flex: 1;
  overflow-x: hidden;
}
</style>
