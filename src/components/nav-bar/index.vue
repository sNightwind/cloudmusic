<template>
    <van-nav-bar
        :title="$route.meta.title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
       
    />
</template>
<script>


export default ({
   name:'NavBar',
   methods:{
        onClickLeft(){
          this.$router.back();  
        }
   }
})
</script>
<style scoped>
    van-nav-bar{
        color:red;
    }

</style>