import { createWebHistory, createRouter } from "vue-router";
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("./views/auth/Login.vue")
  },
  {
    path: "/",
    alias: "/users-list",
    name: "usersList",
    component: () => import("./views/user/UsersList.vue")
  },
  {
    name: 'registerUser',
    path: '/register-user',
    component: () => import('./views/user/RegisterUser.vue')
  },
  {
    name: 'surveysList',
    path: '/surveys',
    component: () => import('./views/survey/SurveysList.vue')
  },
  {
    name: 'userSurveysList',
    path: '/surveys/user/:id',
    component: () => import('./views/user/ViewUserSurveys.vue')
  },
  {
    name: 'createSurvey',
    path: '/create-survey',
    component: () => import('./views/survey/CreateSurvey.vue')
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/survey-frontend-admin/',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;