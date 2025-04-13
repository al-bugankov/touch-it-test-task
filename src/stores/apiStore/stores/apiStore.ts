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
      async getAllCategories() {
        const feedbackStore = useFeedbackStore();
        try {
          feedbackStore.isGlobalLoading = true;
          const response = await axios.get(
            'https://fakestoreapi.com/products/categories', {
              headers: {'Content-Type': 'application/json'}
            }
          )
          if (response.data) {
            console.log('response.data',response.data)
            this.categories = response.data
          }
        } catch (error) {
          console.error(error)
        } finally {
          feedbackStore.isGlobalLoading = false;
          console.log('Завершили getAllCategories')
        }
      },
      async getAllProducts() {
        const feedbackStore = useFeedbackStore();
        try {
          feedbackStore.isGlobalLoading = true;
          const response = await axios.get(
            'https://fakestoreapi.com/products', {
              headers: {'Content-Type': 'application/json'}
            }
          )
          if (response.data) {
            console.log(response.data)
            this.products = response.data
          }
        } catch (error) {
          console.error(error)
        } finally {
          feedbackStore.isGlobalLoading = false;
          console.log('Завершили getAllCategories')
        }
      }
    }
})
