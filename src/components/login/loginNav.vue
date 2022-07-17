<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="$router.push('/')"
    />
  </div>
</template>
<script>
export default {
  name: "loginNav",
  components: {},
};
</script>
