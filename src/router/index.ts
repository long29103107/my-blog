import { createRouter, createWebHistory } from 'vue-router'
import adminRoutes from './admin'
import userRoutes from './user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/UserLayout.vue'),
      children: userRoutes
    },
    {
      path: '/admin',
      component: () => import('../layouts/AdminLayout.vue'),
      children: adminRoutes
    }
  ]
})

export default router
