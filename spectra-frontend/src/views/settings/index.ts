import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../../views/HomeView.vue';

export const routes = [
  {
    path: '/',
    name: '/',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
