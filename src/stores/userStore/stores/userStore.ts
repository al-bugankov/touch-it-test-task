import { defineStore } from 'pinia'
import type {IUserStoreState} from "@/stores/userStore/types/IUserStoreState.ts";

export const useUserStore = defineStore('userStore', {
  state: (): IUserStoreState => ({
    isUserLogin: false,
    currentCategory: '',
    userCart: [],
    searchQuery: '',
    sortOption: '',
    itemsPerPage: 6,
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

    saveFiltersToLocalStorage(category: string, sort: string, itemsPerPage: number) {
      localStorage.setItem('filters', JSON.stringify({category, sort, itemsPerPage}));
    },

    loadFiltersFromLocalStorage() {
      const filters = localStorage.getItem('filters');
      if (filters) {
        const {category, sort, itemsPerPage} = JSON.parse(filters);
        this.currentCategory = category;
        this.sortOption = sort;
        this.itemsPerPage = itemsPerPage;
      }
    }
  }
})
