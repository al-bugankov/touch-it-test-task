<script setup lang="ts">
defineProps<{
  image: string
  name: string
}>()
</script>

<template>
  <v-card class="category-card" elevation="2">
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
