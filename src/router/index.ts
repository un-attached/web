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
      path: '/release/woidzero/mind-furnace',
      name: 'release',
      component: () => import('../views/ReleaseView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
  ],
})

export default router
