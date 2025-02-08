import { ref } from 'vue';
import type RoleType from '@/types/common/role/RoleType'
import { displayError } from '@/utils/ErrorHandler';
import { URL_CONSTANTS } from '@/constants/url-contants'
import { fetchList } from '@/hooks/common/useFetch'

export function useRoles() {
  const roles = ref<RoleType[]>([]); 
  const loading = ref(false);
  const error = ref<unknown | null>(null);

  const fetchRoles = async () => {
    loading.value = true;
    error.value = null;
    try {
      const {error, data} = await fetchList(URL_CONSTANTS.ROLE.GET_LIST); 
      roles.value = data.value;
    } catch (err) {
      error.value = err;
      displayError(err); 
    } finally {
      loading.value = false;
    }
  };

  fetchRoles()

  return { roles, loading, error, fetchRoles };
}