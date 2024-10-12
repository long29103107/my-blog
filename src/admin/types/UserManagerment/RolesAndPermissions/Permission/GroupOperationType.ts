import type OperationType from '@/admin/types/UserManagerment/RolesAndPermissions/Permission/OperationType'

export default interface GroupOperationType {
  id: number
  label: string
  defaultStatus: boolean
  isOverrided: boolean
  currentStatus: boolean
  childOperations: Array<OperationType>
}
