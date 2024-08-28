import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import UserPost from '../views/Admin/UserPost.vue'
import UserProfile from '../views/Admin/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/admin',
      component: Dashboard,
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: UserProfile
        },
        {
          path: 'post',
          name: 'post',
          component: UserPost
        }
      ]
    }
  ]
})

export default router
