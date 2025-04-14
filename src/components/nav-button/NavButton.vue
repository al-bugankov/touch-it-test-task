<script setup lang="ts">
defineProps({
  buttonText: {
    type: String,
  }
})
</script>

<template>
  <button type="button" class="nav-button">{{ buttonText }}</button>
</template>

<style scoped lang="scss">
.nav-button {
  font-family: semibold, sans-serif;
  min-width: 150px;
  font-size: 16px;
  line-height: 140%;
  height: 50px;
  border: 1px solid rgb(var(--v-theme-accent));
  border-radius: $border-radius;
}
</style>
