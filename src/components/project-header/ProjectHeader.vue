<script setup lang="ts">
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher.vue";
import NavButton from "@/components/nav-button/NavButton.vue";
import LoginButton from "@/components/login-button/LoginButton.vue";
</script>

<template>
<v-container class="project-header" fluid>
  <div class="project-header__icon-container">
  <div class="icon-container__icon">
    <svg-icon name="logo" class="icon" />
  </div>
  <div class="icon-container__text">Touch IT Marketplace</div>
</div>
  <div class="project-header__buttons-container">
    <nav-button buttonText="Marketplace" @click="goHome" />
    <nav-button buttonText="Chart" @click="goToChart" />
    <login-button />
    <div class="buttons-container__theme-switcher">
      <theme-switcher />
    </div>
  </div>
</v-container>
</template>

<style scoped>
.project-header,
.project-header__icon-container,
.buttons-container__theme-switcher {
  display: flex;
  align-items: center;
}

.project-header {
  height: 100px;
  width: 80vw;
  justify-content: space-between;
}

.project-header__buttons-container {
  width: 40%;
  display: flex;
  justify-content: space-between;
}

.icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
}
</style>
