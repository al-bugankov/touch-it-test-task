import { defineStore } from 'pinia'
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import axios from 'axios'
import type { IApiStoreState } from "@/stores/apiStore/types/IApiStoreState.ts";

export const useApiStore = defineStore('apiStore', {
  state: (): IApiStoreState => ({
    categoriesPictures: [
      '/images/categories/electronics.png',
      '/images/categories/jewelery.png',
      '/images/categories/mens-clothing.png',
      '/images/categories/womens-clothing.png'
    ],
    categories: [],
    products: [],
 }),
    actions: {
      loadCategoriesFromLocalStorage() {
        const categories = localStorage.getItem('categories');
        if (categories) {
          this.categories = JSON.parse(categories);
        }
      },
      loadProductsFromLocalStorage() {
        const products = localStorage.getItem('products');
        if (products) {
          this.products = JSON.parse(products);
        }
      },
      // Загружаем все категории с сервера, если их нет в localStorage
      async getAllCategories() {
        const feedbackStore = useFeedbackStore();
        try {
          feedbackStore.isGlobalLoading = true;

          // Проверяем, есть ли категории в localStorage
          if (!this.categories.length) {
            const response = await axios.get(
              'https://fakestoreapi.com/products/categories', {
                headers: { 'Content-Type': 'application/json' }
              }
            );
            if (response.data) {
              this.categories = response.data;
              localStorage.setItem('categories', JSON.stringify(this.categories)); // Сохраняем в localStorage
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          feedbackStore.isGlobalLoading = false;
          console.log('Завершили getAllCategories');
        }
      },

      // Загружаем все товары с сервера, если их нет в localStorage
      async getAllProducts() {
        const feedbackStore = useFeedbackStore();
        try {
          feedbackStore.isGlobalLoading = true;

          // Проверяем, есть ли товары в localStorage
          if (!this.products.length) {
            const response = await axios.get(
              'https://fakestoreapi.com/products', {
                headers: { 'Content-Type': 'application/json' }
              }
            );
            if (response.data) {
              this.products = response.data;
              localStorage.setItem('products', JSON.stringify(this.products)); // Сохраняем в localStorage
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          feedbackStore.isGlobalLoading = false;
          console.log('Завершили getAllProducts');
        }
      }
    }
});
