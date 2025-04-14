<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import ProjectHeader from "@/components/project-header/ProjectHeader.vue";
import LoaderOverlay from "@/components/loader-overlay/LoaderOverlay.vue";
import { onMounted } from "vue";
import { useApiStore } from "@/stores/apiStore/stores/apiStore.ts";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
const apiStore = useApiStore();
const userStore = useUserStore();

const feedbackStore = useFeedbackStore();

onMounted(async () => {
  apiStore.loadCategoriesFromLocalStorage();
  apiStore.loadProductsFromLocalStorage();
  userStore.loadCartFromLocalStorage();
  userStore.loadFiltersFromLocalStorage();
});
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
