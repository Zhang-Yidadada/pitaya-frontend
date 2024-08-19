import { fetchLogin } from '@/service/api'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth-store', () => {
  function login(username, password, redirect = true) {
    console.log(username, password, redirect)
    fetchLogin(username, password)
  }

  return {
    login
  }
})
