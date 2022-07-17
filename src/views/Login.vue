<template>
  <div>
    <loginNav></loginNav>
    <loginBody></loginBody>
    <loginBottom></loginBottom>
  </div>
</template>
<script>
// @ is an alias to /src
import loginNav from "@/components/login/loginNav.vue";
import loginBody from "@/components/login/loginBody.vue";
import loginBottom from "@/components/login/loginBottom.vue";
export default {
  name: "login",
  components: {
    loginNav,
    loginBody,
    loginBottom,
  },
};
</script>