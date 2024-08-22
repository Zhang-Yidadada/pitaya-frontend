import { fetchLogin } from '@/service/api'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth-store', () => {
  function login(account, password, redirect = true) {
    console.log(account, password, redirect)
    fetchLogin(account, password)
  }

  return {
    login
  }
})
