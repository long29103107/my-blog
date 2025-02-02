const Layout = () => import('@/layouts/AdminLayout.vue')
const Dasboard = () => import('@/pages/admin/Dasboard.vue')
const UserManagerment = () => import('@/pages/admin/UserManagerment.vue')

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
