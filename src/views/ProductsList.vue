<script setup lang="ts">
import { ref, computed } from "vue"
import { useApiStore } from "@/stores/apiStore/stores/apiStore.ts";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import ProductCard from "@/components/product-card/ProductCard.vue";

const apiStore = useApiStore();
const userStore = useUserStore();

const categories = apiStore.categories;

const selectedCategory = ref(userStore.currentCategory);

const filteredProducts = computed(() =>
  apiStore.products.filter(p => p.category === selectedCategory.value)
)
</script>

<template>
  <v-container>
<div class="products-list">
  <header class="products-list__header">
    <v-select
      v-model="selectedCategory"
      :items="categories"
    label="Текущая категория"
  />
  </header>
  <v-row class="products-list__cards">
    <v-col
      v-for="product in filteredProducts"
      :key="product.id"
      cols="12"
       sm="8"
       md="6"
       lg="4"
       >
    <product-card :product="product" />
    </v-col>
  </v-row>
</div>
  </v-container>
</template>

<style scoped>
.products-list__cards {
  display: flex;
  justify-content: center;
}
</style>
