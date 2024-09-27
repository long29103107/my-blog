const Layout = () => import('@/admin/components/About.vue')
const Policy = () => import('@/admin/components/Policy.vue')
const About = () => import('@/admin/components/About.vue')

export default [
  {
    path: '/admin',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AdminPolicy',
        component: Policy
      },
      {
        path: 'about',
        name: 'AdminAbout',
        component: About
      }
    ]
  }
]
