<template>
  <div>
    <TopNav></TopNav>
    <SwpierTop></SwpierTop>
    <MusicList/>
    <IconList></IconList>
  </div>
</template>

<script>
// @ is an alias to /src



import TopNav from '@/components/home/TopNav.vue'
import SwpierTop from '@/components/home/SwpierTop.vue'
import MusicList from '@/components/home/MusicList.vue'
import IconList from "@/components/home/IconList.vue";

export default {
  name: "HomeView",
  components: {
    TopNav,
    SwpierTop,
    MusicList,
    IconList,
  },
};

</script>
