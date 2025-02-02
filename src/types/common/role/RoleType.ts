export default interface RoleType {
  id: number
  createdBy: string
  updatedBy: string | null // Allows null in case it's explicitly null
  code: string
  name: string
  isActive: boolean
  createdAt: string // ISO date string
  updatedAt: string | null // ISO date string or null
}
