import { createFlatRequest } from '@pkg/axios'

const baseURL = import.meta.env.VITE_SERVICE_BASE_URL

console.log(baseURL)

export const request = createFlatRequest(
  {
    baseURL
  },
  {
    onRequest(config) {
      const { headers } = config
      const token = window.localStorage.token
      const Authorization = token ? `Bearer ${token}` : null
      Object.assign(headers, { Authorization })
      return config
    }
  }
)
