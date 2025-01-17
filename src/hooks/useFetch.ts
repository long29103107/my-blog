import { ref } from 'vue'
import apiClient from '@/plugins/axios'

const fetchList = async (url: string) => {
  const fullPath = import.meta.env.VITE_API_URL + url
  // console.log('Fullpath', fullPath)
  const data = ref([])
  const error = ref({})

  try {
    const response = await apiClient.get(fullPath)

    data.value = response.data
  } catch (error) {}

  return { error, data }
}

export default fetchList
