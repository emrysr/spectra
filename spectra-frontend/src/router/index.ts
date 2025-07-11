import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

export const routes = [
  {
    path: '/',
    name: '/',
    component: HomeView,
    meta: { transition: 'slide-fade' },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { transition: '' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
