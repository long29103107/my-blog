const Layout = () => import('@/user/UserLayout.vue')
const Policy = () => import('@/user/components/Policy.vue')
const About = () => import('@/user/components/About.vue')

export default [
  {
    path: '/',
    component: Layout, // Bố cục trang dành cho admin
    children: [
      {
        path: '',
        name: 'Policy',
        component: Policy
      },
      {
        path: 'about',
        name: 'About',
        component: About
      }
    ]
  }
]
