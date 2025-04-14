<script setup lang="ts">
import { onMounted } from "vue";
import { useApiStore } from "@/stores/apiStore/stores/apiStore.ts";
import CategoryCard from "@/components/category-card/CategoryCard.vue";

const apiStore = useApiStore();

onMounted(async () => {
  if (!apiStore.categories.length) {
    await apiStore.getAllCategories();
  }

  if (!apiStore.products.length) {
    await apiStore.getAllProducts();
  }})
</script>


<template>
  <v-container>
    <v-row
      class="category-list content"
    >
      <v-col
        v-for="(category, index) in apiStore.categories"
        :key="category"
        cols="12"
        md="5"
        class="category-list__item"
      >
        <CategoryCard
          :image="apiStore.categoriesPictures[index]"
          :name="category"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.category-list {
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
  display: flex;
  flex-wrap: wrap;

  &__item {
    display: flex;
    justify-content: center;
  }
}
</style>
