import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/",
    alias: "/users-list",
    name: "usersList",
    component: () => import("./views/user/UsersList.vue")
  },
  {
    path: "/view/:id",
    name: "view",
    component: () => import("./views/user/ViewAlbum.vue"),
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/auth/Login.vue")
  },
  {
    name: 'registerUser',
    path: '/register-user',
    component: () => import('./views/user/RegisterUser.vue')
  },
  {
    name: 'surveysList',
    path: '/surveys',
    component: () => import('./views/admin/SurveysList.vue')
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;