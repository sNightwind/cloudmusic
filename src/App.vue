<template>
  <router-view />
  <FooterMusic />
</template>

<script>
import FooterMusic from "@/components/home/item/FooterMusic.vue"
export default{
  components:{
    FooterMusic
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: .5rem;
  height: .5rem;
}
</style>
