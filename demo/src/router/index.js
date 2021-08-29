import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "/sy",
        name: "sy",
        component: () => import("../views/sy.vue"),
      },
      {
        path: "/kc",
        name: "kc",
        component: () => import("../views/kc.vue"),
      },
      {
        path: "/zx",
        name: "zx",
        component: () => import("../views/zx.vue"),
      },
      {
        path: "/ts",
        name: "ts",
        component: () => import("../views/ts.vue"),
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
