<script setup lang="ts">
import {ref, computed, watch, onMounted} from "vue"
import { useApiStore } from "@/stores/apiStore/stores/apiStore.ts";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import ProductCard from "@/components/product-card/ProductCard.vue";

const apiStore = useApiStore();
const userStore = useUserStore();

const searchQuery = ref('');

const sortOption = computed({
  get: () => userStore.sortOption,
  set: (value) => userStore.sortOption = value
});

const categories = computed(() => ['all', ...apiStore.categories]);

const selectedCategory = ref(userStore.currentCategory);

const filteredProducts = computed(() => {
  let result = apiStore.products.filter(p =>
    (selectedCategory.value === 'all' || p.category === selectedCategory.value) &&
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  );

  if (sortOption.value === 'asc') {
    result = result.sort((a, b) => a.price - b.price);
  } else if (sortOption.value === 'desc') {
    result = result.sort((a, b) => b.price - a.price);
  }
  return result;
});

watch([selectedCategory, searchQuery, sortOption], () => {
  userStore.saveFiltersToLocalStorage(selectedCategory.value, sortOption.value);
});
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
    <v-select
      v-model="sortOption"
      :items="[
    { title: 'Без сортировки', value: '' },
    { title: 'Сначала дешевые', value: 'asc' },
    { title: 'Сначала дорогие', value: 'desc' }
  ]"
      label="Сортировка по цене"
    />
    <v-text-field
      v-model="searchQuery"
      label="Поиск по названию"
      clearable
    />
  </header>
  <v-row class="products-list__cards">
    <v-col
      v-for="product in filteredProducts"
      :key="product.id"
      class="products-list__item"
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
.products-list__item {
  display: flex;
  justify-content: center;
}

.products-list__cards {
  justify-content: center;
}
</style>
