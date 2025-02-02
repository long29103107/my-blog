const Layout = () => import('@/user/UserLayout.vue')
const Login = () => import('@/user/pages/Login')

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login
      }
    ]
  }
]
