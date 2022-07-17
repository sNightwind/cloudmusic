import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
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

  {
    path: "/itemMusic",
    name: "ItemMusic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "itemMusic" */ "../views/ItemMusic.vue"),
  },

  {
    path: "/my",
    name: "my",
    //路由守卫
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin) {
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  console.log(to);
  //全局组件 用于判断播放器是否需要显示
  if (to.path == "/login") {
    store.state.isFooterMusic = false;
  } else {
    store.state.isFooterMusic = true;
  }
  console.log(store.state.isFooterMusic);
});

export default router;
