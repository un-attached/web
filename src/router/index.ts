import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/releases',
      name: 'releases',
      component: () => import('../views/ReleasesView.vue'),
    },
    {
      path: '/album',
      name: 'album',
      component: () => import('../views/ReleasesView.vue'),
    },
  ],
})

export default router
