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
  <v-container class="project-header" fluid>
    <v-row class="project-header__row" align="center">
      <v-col cols="12" md="6" class="project-header__col project-header__col--logo">
        <div class="project-header__logo">
          <div class="project-header__icon">
            <svg-icon name="logo" class="project-header__svg" />
          </div>
          <div class="project-header__text">Touch IT Marketplace</div>
          <theme-switcher />
        </div>
      </v-col>

      <v-col cols="12" md="6" class="project-header__col project-header__col--buttons">
        <div class="project-header__buttons">
          <nav-button buttonText="Marketplace" class="project-header__button" @click="goHome" />
          <nav-button @click="goToChart" class="project-header__button" :buttonText="buttonText" />
          <login-button class="project-header__button" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.project-header {
  display: flex;
  justify-content: space-evenly;

  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    color: rgb(var(--v-theme-accent));

    @media (max-width: 959px) {
      justify-content: center;
      text-align: center;
    }
  }

  &__col {
    display: flex;
    align-items: center;

    &--logo,
    &--buttons {
      @media (max-width: 959px) {
        justify-content: center !important;
      }
    }

    &--buttons {
      justify-content: flex-end;

      @media (max-width: 959px) {
        justify-content: center;
      }
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__icon {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  &__svg {
    width: 32px;
    height: 32px;
    margin-right: 12px;
  }

  &__text {
    font-weight: bold;
    font-size: 18px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 502px) {
      flex-direction: column;
      width: 100%;

      .project-header__button {
        width: 100%;
      }
    }
  }
}
</style>
