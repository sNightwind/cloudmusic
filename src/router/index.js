import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import tabbar from '../components/tab-bar/index.vue'
import Navbar from '../components/nav-bar/index.vue'
import Command from '../views/command/index.vue'
import Program from '../views/program/index.vue'
import Artists from '../views/artists/index.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    name:'home',
    components:{
      default:Home,
      footer:tabbar,
    },
    meta:{
      icon:'wap-home',
      title:'发现',
      inTabbar:true,
    }
  },
  {
    path:'/command',
    name:'command',
    components:{
      header:Navbar,
      default:Command,
      footer:tabbar,
    },
    meta:{
      icon:'music',
      title:'推荐电台',
      inTabbar:true,
    }
  },
  {
    path:'/program',
    name:'program',
    components:{
      header:Navbar,
      default:Program,
      footer:tabbar,
    },
    meta:{
      icon:'&#xe123',
      title:'电台详情',
      inTabbar:false,
    }
  },
  {
    path:'/artists',
    name:'artists',
    components:{
      header:Navbar,
      default:Artists,
      footer:tabbar,
    },
    meta:{
      icon:'award',
      title:'歌手榜',
      inTabbar:true,
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
