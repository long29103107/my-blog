import path from 'path'

const adminRoutes = [
  {
    path: '',
    name: 'dashboard',
    component: () => import('../../views/Admin/Dashboard/DashboardView.vue')
  },
  {
    path: 'roles',
    name: 'role',
    component: () => import('../../views/Admin/User/RoleView.vue')
  },
  {
    path: 'permissions',
    name: 'permission',
    component: () => import('../../views/Admin/User/PermissionView.vue')
  },
  {
    path: 'security-matrix',
    name: 'security-matrix',
    component: () => import('../../views/Admin/User/SecurityMatrixView.vue')
  }
]
export default adminRoutes
