<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";

const userStore = useUserStore();

const buttonText = ref<string>("Login");

const changeLoginStatus = () => {
  userStore.isUserLogin ? userStore.logout() : userStore.login()
  userStore.isUserLogin ? buttonText.value = 'Logout' : buttonText.value = 'Login'
}

</script>

<template>
<button type="button" @click="changeLoginStatus">
  <svg-icon name="user" class="icon" />
  {{ buttonText }}
</button>
</template>

<style lang="scss" scoped>
button {
  width: 152px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: $border-radius;
  background-color: #A259FF;
}
.icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  color: rgb(var(--v-theme-primary));
  stroke: currentColor;
  fill: currentColor;
}
</style>
