<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";

const userStore = useUserStore();
const feedbackStore = useFeedbackStore();

const buttonText = ref<string>("Login");

const changeLoginStatus = () => {
  if (userStore.isUserLogin) {
    userStore.logout();
    buttonText.value = 'Login';
    feedbackStore.showToast({ text: 'Вы разлогинились!', color: 'info' });
  } else {
    userStore.login();
    buttonText.value = 'Logout';
    feedbackStore.showToast({ text: 'Вы успешно залогинились!', color: 'success' });
  }
};

</script>

<template>
<button type="button" class="action-button" @click="changeLoginStatus">
  <svg-icon name="user" class="icon" />
  {{ buttonText }}
</button>
</template>

<style lang="scss" scoped>
.icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  color: rgb(var(--v-theme-primary));
  stroke: currentColor;
  fill: currentColor;
}
</style>
