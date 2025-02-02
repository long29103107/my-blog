// import { ref, computed } from 'vue'
// import { useFetch } from '@/hooks/useFetch'

// export function useRoles(initialRoles) {
//   const roles = ref([...initialRoles])

//   // Fetch roles from API
//   const fetchRoles = async () => {
//     isLoading.value = true
//     error.value = null
//     try {
//       const response = await apiClient.get('/identity/roles')
//       if (!response.ok) throw new Error('Failed to fetch roles')
//       roles.value = await response.json()
//     } catch (err) {
//       error.value = err.message
//     } finally {
//       isLoading.value = false
//     }
//   }

//   // Get all active roles
//   const activeRoles = computed(() => roles.value.filter((role) => role.isActive))

//   // Get all inactive roles
//   const inactiveRoles = computed(() => roles.value.filter((role) => !role.isActive))

//   // Toggle the active state of a role by ID
//   const toggleRoleActiveState = (roleId) => {
//     const role = roles.value.find((role) => role.id === roleId)
//     if (role) {
//       role.isActive = !role.isActive
//     }
//   }

//   // Add a new role
//   const addRole = (newRole) => {
//     roles.value.push({
//       id: Date.now(), // Generate a unique ID
//       createdBy: '',
//       updatedBy: '',
//       code: newRole.code || 'new-role',
//       name: newRole.name || 'New Role',
//       isActive: newRole.isActive ?? true,
//       createdAt: new Date().toISOString(),
//       updatedAt: null
//     })
//   }
//   return {
//     roles,
//     activeRoles,
//     inactiveRoles,
//     toggleRoleActiveState,
//     addRole
//   }
// }
