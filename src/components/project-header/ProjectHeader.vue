<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { ERouteNames } from "@/router/ERouteNames.ts";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher.vue";
import NavButton from "@/components/nav-button/NavButton.vue";
import LoginButton from "@/components/login-button/LoginButton.vue";

const router = useRouter();
const userStore = useUserStore();

const goHome = () => {
  router.push({name: ERouteNames.SHOP})
}

const goToChart = () => {
  router.push({name: ERouteNames.CHART})
}
</script>

<template>
  <v-container class="project-header" fluid>
    <v-row class="project-header__row">
      <v-col cols="12" sm="6" class="project-header__logo">
        <div class="icon-container__icon">
          <svg-icon name="logo" class="icon" />
        </div>
        <div class="icon-container__text">Touch IT Marketplace</div>
      </v-col>

      <v-col cols="12" sm="6" class="project-header__buttons">
        <nav-button buttonText="Marketplace" @click="goHome" />
        <nav-button  @click="goToChart" :buttonText="`Chart${userStore.userCart.length > 0 ? ' (' + userStore.userCart.length + ')' : ''}`" />
        <login-button />
        <theme-switcher />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.project-header__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: rgb(var(--v-theme-accent));
}

.project-header__logo {
  display: flex;
  align-items: center;
}

.project-header__buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}

.icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}

.icon-container__text {
  font-weight: bold;
  font-size: 18px;
}
</style>
