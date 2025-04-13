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

<style scoped>
.nav-button {
  font-family: semibold, sans-serif;
  font-size: 16px;
  line-height: 140%;
}
</style>
