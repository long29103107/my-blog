import { createRouter, createWebHistory } from 'vue-router'
import admin from './adminRouter'
import user from './clientRouter'

const routes = [
  ...admin,
  ...user,
  {
    // will match everything
    path: '/',
    component: () => import('@/pages/error/Page404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
