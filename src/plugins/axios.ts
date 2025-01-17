import axios from 'axios'

axios.interceptors.response.use(
  (response) => response.data, // Chỉ trả về dữ liệu
  (error) => Promise.reject(error)
)

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json'
  }
})

export default apiClient
