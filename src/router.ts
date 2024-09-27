import { createRouter, createWebHistory } from 'vue-router'
import admin from './admin/router'
import user from './user/router'

const routes = [
  ...admin,
  ...user,
  {
    // will match everything
    path: '/',
    component: () => import('@/common/view/Page404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
