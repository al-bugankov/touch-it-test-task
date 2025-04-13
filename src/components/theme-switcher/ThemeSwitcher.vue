<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <label class="project-header__switch">
    <input id="theme-switcher" type="checkbox" @change="toggleTheme"/>
    <span class="project-header__slider"></span>
  </label>
</template>

<style lang="scss">
.project-header__switch {
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

  .project-header__slider {
    width: 15px;
    height: 15px;
    background: url('/src/assets/icons/theme-switcher/moon.svg') no-repeat center/contain;
    border-radius: 50%;
    transition:
      transform 0.4s,
      background-image 0.4s;
    margin: 2px;

    &.checked {
      transform: translateX(31px);
      background: url('/src/assets/icons/theme-switcher/sun.svg') no-repeat center/contain;
    }
  }

  input:checked + .project-header__slider {
    transform: translateX(31px);
    background: url('/src/assets/icons/theme-switcher/sun.svg') no-repeat center/contain;
  }
}
</style>
