<script setup lang="ts">
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useApiStore } from "@/stores/apiStore/stores/apiStore.ts";
import { ERouteNames } from "@/router/ERouteNames.ts";
import { useRouter } from "vue-router"

const userStore = useUserStore();
const apiStore = useApiStore();
const router = useRouter();

defineProps<{
  image: string
  name: string
}>()

const goToCategory = async (name: string): void => {
userStore.currentCategory = name;
await apiStore.getAllProducts()
await router.push({ name: ERouteNames.CATEGORY })
}
</script>

<template>
  <v-card class="category-card" elevation="2" @click="goToCategory(name)">
    <img class="category-card__image" :src="image" :alt="name" />
    <p class="category-card__name">{{ name }}</p>
  </v-card>
</template>

<style scoped lang="scss">
.category-card {
  max-width: 510px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgb(var(--v-theme-accent));
  border-radius: $border-radius;
  margin-bottom: 10px;
  cursor: pointer;
}

.category-card__name {
  text-transform: uppercase;
  text-align: center;
}
</style>
