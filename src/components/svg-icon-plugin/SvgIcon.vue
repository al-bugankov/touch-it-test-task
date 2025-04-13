<script setup lang="ts">
defineProps<{
  name: string
  customClass?: string
}>()
</script>

<template>
  <svg :class="customClass" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<style scoped>

</style>
