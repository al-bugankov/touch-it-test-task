<script setup lang="ts">
import { ref } from 'vue'

const counter = ref<number>(1);

const decrease = () => {
  counter.value--
  emit('update:counter', counter.value);
}

const increase = () => {
  counter.value++
  emit('update:counter', counter.value);
}

const emit = defineEmits(['update:counter']);
</script>

<template>
<div class="product-counter">
  <button type="button" class="product-counter__button product-counter__button--decrease" :disabled="counter === 1" @click="decrease">-</button>
  <div class="product-counter__value">{{ counter }}</div>
  <button type="button" class="product-counter__button product-counter__button--increase" @click="increase">+</button>
</div>
</template>

<style scoped lang="scss">
.product-counter {
  display: flex;
  width: 100px;
  justify-content: space-evenly;
  padding-block: 10px;
  color: $button-background;

  &__button {
    border: 1px solid $button-background;
    border-radius: $border-radius;
    min-width: 50px;
    font-size: 20px;

    &:disabled {
      border: 1px solid grey;
      cursor: not-allowed;
    }
  }

  &__value {
    padding-inline: 10px;
    font-size: 18px;
  }
}
</style>
