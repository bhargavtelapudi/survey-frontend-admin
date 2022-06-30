import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/adminsList",
    name: "adminsList",
    component: () => import("./views/admin/AdminsList.vue")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./views/admin/AddAlbum.vue")
  },
  {
    path: "/view/:id",
    name: "view",
    component: () => import("./views/admin/ViewAlbum.vue"),
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/auth/Login.vue")
  },
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;