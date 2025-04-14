<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <label class="theme-switcher">
    <input id="theme-switcher" type="checkbox" @change="toggleTheme" />
    <span class="theme-switcher__slider"></span>
  </label>
</template>

<style scoped lang="scss">
.theme-switcher {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 50px;
  height: 17px;
  background-color: rgb(var(--v-theme-accent));
  border-radius: 25px;
  cursor: pointer;
  margin-left: 5px;

  input {
    display: none;
  }

  &__slider {
    width: 15px;
    height: 15px;
    margin: 2px;
    border-radius: 50%;
    background: url('/src/assets/icons/theme-switcher/moon.svg') no-repeat center/contain;
    transition:
      transform 0.4s,
      background-image 0.4s;
  }

  input:checked + &__slider {
    transform: translateX(31px);
    background: url('/src/assets/icons/theme-switcher/sun.svg') no-repeat center/contain;
  }
}
</style>
