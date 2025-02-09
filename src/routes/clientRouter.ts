import { useRouter } from 'vue-router';

const Layout = () => import('@/layouts/UserLayout.vue')
const Home = () => import('@/pages/client/Home/index.vue')
const Login = () => import('@/pages/client/Authen/Login.vue')
const Register = () => import('@/pages/client/Authen/Register.vue')

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: 'login',
        name: 'Login',
        component: Login
      },
      {
        path: 'register',
        name: 'Register',
        component: Register
      }
    ]
  }
]
