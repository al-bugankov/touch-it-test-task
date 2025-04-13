<script lang="ts" setup>
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";

const feedbackStore = useFeedbackStore()
</script>

<template>
  <div v-if="feedbackStore.isGlobalLoading" class="loader_overlay">
    <v-progress-circular
      indeterminate
      color="#A259FF"
    />
  </div>
</template>

<style scoped>
.loader_overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgb(232, 232, 232);
  opacity: 0.9;
  transition: opacity 0.1s;
}
</style>
