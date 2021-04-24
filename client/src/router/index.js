import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login";
import Signup from "../views/Signup";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home, meta: { authUser: true } },

  { path: "/login", name: "Login", component: Login },

  { path: "/signup", name: "Signup", component: Signup },

  {
    path: "/AccountSettings",
    name: "AccountSettings",
    component: () => import("../views/AccountSettings.vue"),
    meta: { authUser: true },
  },
  {
    path: "/About",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/tools",
    name: "Tools",
    component: () => import("../views/Tools.vue"),
  },

  {
    path: "/FindPeople",
    name: "FindPeople",
    component: () => import("../views/FindPeople.vue"),
    meta: { authUser: true },
  },
  {
    path: "/MyInputs",
    name: "MyInputs",
    component: () => import("../views/MyInputs.vue"),
    meta: { authUser: true },
  },
  {
    path: "/FriendList",
    name: "FriendList",
    component: () => import("../views/FriendList.vue"),
    meta: { authUser: true },
  },
  {
    path: "/User/:username",
    name: "UserProfile",
    component: () => import("../views/UserProfile.vue"),
    meta: { authUser: true },
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: { authUser: true },
  },
  {
    path: "/Admin",
    name: "Admin",
    component: () => import("../views/admin/Index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  history: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authUser)) {
    if (store.getters.loggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});
export default router;
