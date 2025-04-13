import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    isUserLogin: false,
  }),
  actions: {
    login() {
      this.isUserLogin = true
    },
    logout() {
      this.isUserLogin = false
    }
  }
})
