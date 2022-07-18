<template>
    <div>
        <ul class="tab-bar">
            <router-link
            v-for="item in tabItems"
            :key="item.path"
            :to="item.path"
            tag="li"
            >
            <van-icon :name="item.meta.icon" size="40" />
            <span>{{item.meta.title}}</span>
            </router-link>
        </ul>
    </div>
</template>


<script>
import routes from '../../router/index.js'
    export default{
        name:'TabBar',
        computed:{
            tabItems(){
                return routes.options.routes.filter(route=>route.meta?.inTabbar);
            },
        },
        data(){
            return{
                
            }
        },
        created(){
            console.log(routes.options.routes.filter(route=>route.meta?.inTabbar)); //过滤inTabbar为true的路由
        }
    }
</script>

<style scoped>
    /* css样式 */
     .tab-bar {
    display: flex;
    border-top: 1px solid #eee;
    height: 96px;

  
  }
  li {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  .router-link-exact-active, .router-link-active {
    color: #f00;
  }
</style>