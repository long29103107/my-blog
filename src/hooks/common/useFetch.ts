import { ref } from 'vue'
import apiClient from '@/plugins/axios'

const fetchList = async (url: string) => {
  const fullPath = import.meta.env.VITE_API_URL + url

  const data = ref([])
  const error = ref({})

  try {
    console.log(fullPath)
    const response = await apiClient.get(fullPath)
    data.value = response.data
  } catch (error) {}

  return { error, data }
}

const fetchPagingList = async (url: string) => {
  const fullPath = import.meta.env.VITE_API_URL + url

  const data = ref([])
  const error = ref({})

  try {
    const response = await apiClient.get(fullPath)

    data.value = response.data
  } catch (error) {}

  return { error, data }
}


const fetchObject = async (url: string) => {
  const fullPath = import.meta.env.VITE_API_URL + url

  const data = ref([])
  const error = ref({})

  try {
    const response = await apiClient.get(fullPath)

    data.value = response.data
  } catch (error) {}

  return { error, data }
}

export {
  fetchList,
  fetchPagingList,
  fetchObject
}
