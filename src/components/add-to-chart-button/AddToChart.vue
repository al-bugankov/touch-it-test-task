<script setup lang="ts">

import SvgIcon from "@/components/svg-icon-plugin/SvgIcon.vue";
</script>

<template>
<button type="button" class="add-to-chart-button">
  <svg-icon name="basket" class="icon" />
  Add to chart
</button>
</template>

<style scoped lang="scss">
.add-to-chart-button {
  width: 100%;
  height: 60px;
  border: 2px solid $button-background;
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}

.icon {
  width: 34px;
  height: 31px;
  margin-right: 12px;
}
</style>
