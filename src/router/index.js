import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import LoginView from '../Views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
  ],
})

export default router
