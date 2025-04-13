<script setup lang="ts">
import {onMounted} from "vue";
import {useApiStore} from "@/stores/apiStore/stores/apiStore.ts";
import CategoryCard from "@/components/category-card/CategoryCard.vue";

const apiStore = useApiStore();

onMounted(async () => {
  await apiStore.getAllCategories()
  console.log('apiStore.categories',apiStore.categories)
})
</script>

<template>
  <v-container>
    <v-row
      class="category-list"
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
  row-gap: 24px;
  column-gap: 32px;
  display: flex;
  flex-wrap: wrap;

  &__item {
    display: flex;
    justify-content: center;
  }
}
</style>
