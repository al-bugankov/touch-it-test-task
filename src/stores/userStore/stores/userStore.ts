import { defineStore } from 'pinia'
import type {IUserStoreState} from "@/stores/userStore/types/IUserStoreState.ts";

export const useUserStore = defineStore('userStore', {
  state: (): IUserStoreState => ({
    isUserLogin: false,
    currentCategory: '',
    userCart: []
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
