import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../Views/HomeView.vue'
import LoginView from '../Views/LoginView.vue'
import ShopView from '@/Views/ShopView.vue'
import ProductDetailView from '../Views/ProductDetailView.vue'

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
    {
      path: '/shop',
      name: 'Shop',
      component: ShopView,
    },
    {
      path: '/products/elite-chair',
      name: 'ProductDetail',
      component: ProductDetailView,
    },
  ],
})

export default router
