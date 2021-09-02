import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/aa",
  },
  {
    path: "/kcxq",
    name: "kcxq",
    component: () => import("../views/kcxq.vue"),
  },
  {
    path: "/qiandao",
    name: "qiandao",
    component: () => import("../views/qiandao.vue"),
  },
  {
    path: "/teacher",
    name: "teacher",
    component: () => import("../views/teacher.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/aa",
    name: "aa",
    component: () => import("../views/aa.vue"),
  },
  {
    path: "/xiangqing",
    name: "xiangqing",
    component: () => import("../views/xiangqing.vue"),
  },
  {
    path: "/login1",
    name: "login1",
    component: () => import("../views/login1.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
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
