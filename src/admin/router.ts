const Layout = () => import('@/admin/AdminLayout.vue')
const Dasboard = () => import('@/admin/components/Dasboard/index.vue')
const UserManagerment = () => import('@/admin/components/UserManagerment/index.vue')

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
