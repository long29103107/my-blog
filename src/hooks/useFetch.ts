import { ref } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<string | null>(null)

  const fetchData = async () => {
    error.value = null

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`) // Provide more context
      }
      data.value = await response.json()
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message // Use the Error message
      } else {
        error.value = 'An unknown error occurred.'
      }
    }
  }

  fetchData()

  return { data, error }
}
