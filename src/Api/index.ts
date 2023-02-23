import axios from 'axios'
import { AuthResponse } from '../Types/ResponseTypes/AuthResponse'
import { ENV } from '../Utils/environment'

const $api = axios.create({
  withCredentials: true,
  baseURL: ENV.API_URL
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use((config) => {
  return config
},async (error) => {
  const originalRequest = error.config
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true
    try {
      const response = await axios.get<AuthResponse>(`${ENV.API_URL}/refresh`, {withCredentials: true})
      localStorage.setItem('token', response.data.accessToken)
      return $api.request(originalRequest)
    } catch (e) {
      console.log('НЕ АВТОРИЗОВАН')
    }
  }
  throw error
})

export default $api