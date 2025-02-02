const Layout = () => import('@/admin/AdminLayout.vue')
const Dasboard = () => import('@/admin/pages/Dasboard.vue')
const UserManagerment = () => import('@/admin/pages/UserManagerment.vue')

export default [
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Dasboard',
        component: Dasboard
      },
      {
        path: 'user-managerment',
        name: 'UserManagerment',
        component: UserManagerment
      }
    ]
  }
]
