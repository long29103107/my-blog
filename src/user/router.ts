const Layout = () => import('@/user/UserLayout.vue')
const Policy = () => import('@/user/components/Policy.vue')
const About = () => import('@/user/components/About.vue')

export default [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Policy',
        component: Policy,
        redirect: { name: 'UserManagerment' }
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  }
]
