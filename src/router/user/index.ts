const userRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../views/AboutView.vue')
  }
]
export default userRoutes
