<template>
  <div>
    <MyTopNav></MyTopNav>
    <MyBody></MyBody>
  </div>
</template>
<script>
import MyTopNav from "@/components/my/MyTopNav.vue";
import MyBody from "@/components/my/MyBody.vue";

// @ is an alias to /src
export default {
  name: "My",
  components: {
    MyTopNav,
    MyBody,
  },
};
</script>
