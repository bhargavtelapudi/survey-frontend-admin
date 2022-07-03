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
  },
  {
    name: 'createSurvey',
    path: '/create-survey',
    component: () => import('./views/admin/CreateSurvey.vue')
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend-admin/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;