<script setup lang="ts">
import { computed } from "vue";
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

const buttonText = computed(() => {
  return userStore.userCart.length > 0 && userStore.isUserLogin ? `Chart (${userStore.userCart.length})` : 'Chart'
})
</script>

<template>
  <v-container class="project-header content" fluid>
    <v-row class="project-header__row" align="center">
      <v-col cols="12" md="6" class="project-header__logo-col">
        <div class="project-header__logo">
          <div class="icon-container__icon">
            <svg-icon name="logo" class="icon" />
          </div>
          <div class="icon-container__text">Touch IT Marketplace</div>
          <theme-switcher />
        </div>
      </v-col>

      <v-col cols="12" md="6" class="project-header__buttons-col">
        <div class="project-header__buttons">
          <nav-button buttonText="Marketplace" class="button" @click="goHome" />
          <nav-button @click="goToChart" class="button" :buttonText="buttonText" />
          <login-button class="button" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.project-header {
  display: flex;
  justify-content: space-evenly;
}

.project-header__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgb(var(--v-theme-accent));
  @media (max-width: 959px) {
    justify-content: center;
    text-align: center;
  }
}

.project-header__logo-col,
.project-header__buttons-col {
  display: flex;
  align-items: center;
  @media (max-width: 959px) {
    justify-content: center !important;
  }
}

.project-header__buttons-col {
  justify-content: flex-end;

  @media (max-width: 959px) {
    justify-content: center;
  }
}

.project-header__logo,
.project-header__content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-header__content {
  margin-top: 10px;
}


.project-header__buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 502px) {
    flex-direction: column;
    width: 100%;
    .button {
      width: 100%;
    }
  }
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
