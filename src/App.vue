<template>
  <div id="app">
      <header>
           <!-- 命名视图-->
          <router-view name="header"></router-view>
      </header>
      <main>
        <router-view ></router-view> <!-- 不给视图命名，默认名称是default-->
      </main>
      <footer>
          <router-view name="footer"></router-view>
      </footer>
  </div>
</template>
<script>
    export default{
      name:'app',

    }
</script>

<style >
.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;}

html, body {
  height: 100%;
}
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  main{
      flex: 1;
      overflow-x: hidden;
  }
</style>
