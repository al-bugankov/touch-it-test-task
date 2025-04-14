<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";
import NavButton from "@/components/nav-button/NavButton.vue";
import ProductCounter from "@/components/product-counter/ProductCounter.vue";


const userStore = useUserStore();

const props = defineProps<{
  product: IApiStoreProductType;
}>();

const emit = defineEmits(['update:total']);

// Локальное состояние количества для этого товара
const quantity = ref(1);

// Вычисляем стоимость этого товара с учетом количества
const itemTotal = computed(() => {
  return props.product.price * quantity.value;
});

// Обработчик изменения счетчика
const handleCounterUpdate = (newValue: number) => {
  quantity.value = newValue;
  // Отправляем обновленную информацию наверх
  emit('update:total', {
    id: props.product.id,
    quantity: quantity.value,
    total: itemTotal.value
  });
};

const deleteItem = (id: number) => {
  userStore.userCart = userStore.userCart.filter(item => item.id !== id)
  userStore.saveCartToLocalStorage();
}
</script>

<template>
  <v-card v-if="userStore.userCart.length > 0" class="product-card" elevation="2">
    <img class="product-card__image" :src="props.product.image" :alt="props.product.title" />
    <div class="product-card__content">
      <p class="product-card__title product-card__label">Название <span class="product-card__text">{{ props.product.title }}</span></p>
      <p class="product-card__price product-card__label">Стоимость <span class="product-card__text product-card__text--price">{{ props.product.price }} $ </span></p>
      <div class="product-card__count product-card__label">Количество <span class="product-card__text"><product-counter @update:counter="handleCounterUpdate" /></span></div>
      <div class="product-card__delete">
        <nav-button buttonText="Удалить товар" class="product-card__button action-button" @click="deleteItem(props.product.id)" />
      </div>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
.product-card {
  width: 100%;
  height: 100%;
  min-height: 230px;
  display: flex;
  justify-content: space-evenly;
  border: 1px solid rgb(var(--v-theme-accent));
  border-radius: $border-radius;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: rgb(var(--v-theme-primary));
  padding-inline: 5px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  &__image {
    max-width: 150px;
    padding: 5px;
    border-radius: $border-radius;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  &__label {
    font-family: semibold, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__text {
    display: block;
    font-family: regular, sans-serif;
    font-size: 14px;

    &--price {
      color: $button-background;
    }
  }

  &__delete {
    min-width: 100%;
    display: flex;
    justify-content: center;
  }

  &__button {
    margin-block: 16px;
    border: none;
    width: 90%;
    max-width: 360px;
  }
}
</style>
