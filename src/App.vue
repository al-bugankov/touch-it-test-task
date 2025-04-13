<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import ProjectHeader from "@/components/project-header/ProjectHeader.vue";
import LoaderOverlay from "@/components/loader-overlay/LoaderOverlay.vue";

const feedbackStore = useFeedbackStore();

</script>

<template>
  <header>
  <project-header />
  </header>

  <RouterView />
  <loader-overlay />
  <v-snackbar
    v-model="feedbackStore.snackbar.visible"
    :timeout="feedbackStore.snackbar.timeout"
    :color="feedbackStore.snackbar.color"
    location="top"
  >
    {{ feedbackStore.snackbar.text }}
  </v-snackbar>
</template>

<style scoped>

</style>
