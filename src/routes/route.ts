import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import SignupPage from '../views/SignupPage.vue'
import OtpPage from '../views/OtpPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LoginPage,
    },
    {
      path: '/signup',
      component: () => import('../views/SignupPage.vue'),
    },
    {
      path: '/otp',
      component: () => import('../views/OtpPage.vue'),
    },
  ],
})
