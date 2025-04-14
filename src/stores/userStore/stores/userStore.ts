import { defineStore } from 'pinia'
import type {IUserStoreState} from "@/stores/userStore/types/IUserStoreState.ts";

export const useUserStore = defineStore('userStore', {
  state: (): IUserStoreState => ({
    isUserLogin: false,
    currentCategory: '',
    userCart: [],
    searchQuery: '',
    sortOption: '',
  }),
  actions: {
    login() {
      this.isUserLogin = true
    },
    logout() {
      this.isUserLogin = false
    },
    saveCartToLocalStorage() {
      localStorage.setItem('userCart', JSON.stringify(this.userCart));
    },

    loadCartFromLocalStorage() {
      const cart = localStorage.getItem('userCart');
      if (cart) {
        this.userCart = JSON.parse(cart);
      }
    },

    saveFiltersToLocalStorage(category: string, sort: string) {
      localStorage.setItem('filters', JSON.stringify({category, sort}));
    },

    loadFiltersFromLocalStorage() {
      const filters = localStorage.getItem('filters');
      if (filters) {
        const {category, sort} = JSON.parse(filters);
        this.currentCategory = category;
        this.sortOption = sort;
      }
    }
  }
})
