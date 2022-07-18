import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store/index";
import tabbar from "../components/tab-bar/index.vue";
import Navbar from "../components/nav-bar/index.vue";
import Command from "../views/command/index.vue";
import Program from "../views/program/index.vue";
import Artists from "../views/artists/index.vue";
import Follows from '@/components/my/Follows.vue'
import Followed from '@/components/my/Followed.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/follows",
    name: "follows",
    component: Follows,
  },
  {
    path: "/followed",
    name: "followed",
    component: Followed,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/itemMusic",
    name: "ItemMusic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "itemMusic" */ "../views/ItemMusic.vue"),
  },
  ,
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue"),
  },
  {
    path: "/my",
    name: "my",
    //路由守卫
    beforeEnter: (to, from, next) => {
      if (
        store.state.isLogin ||
        store.state.token ||
        localStorage.getItem("token")
      ) {
        //判断是否登录
        next();
      } else {
        next("/login");
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "my" */ "../views/My.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/command",
    name: "command",
    components: {
      header: Navbar,
      default: Command,
      footer: tabbar,
    },
    meta: {
      icon: "music",
      title: "推荐电台",
      inTabbar: true,
    },
  },
  {
    path: "/program",
    name: "program",
    components: {
      header: Navbar,
      default: Program,
      footer: tabbar,
    },
    meta: {
      icon: "&#xe123",
      title: "电台详情",
      inTabbar: false,
    },
  },
  {
    path: "/artists",
    name: "artists",
    components: {
      header: Navbar,
      default: Artists,
      footer: tabbar,
    },
    meta: {
      icon: "award",
      title: "歌手榜",
      inTabbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // console.log(to)
  //全局组件 用于判断播放器是否需要显示
  if (to.path == '/login' || to.path == '/my' || to.path == '/follows' || to.path == '/followed') {
    store.state.isFooterMusic = false
  } else {
    store.state.isFooterMusic = true;
  }
  console.log(store.state.isFooterMusic)
})

export default router;
