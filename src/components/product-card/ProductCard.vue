<script setup lang="ts">
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";
import AddToChart from "@/components/add-to-chart-button/AddToChart.vue";

const userStore = useUserStore();
const feedbackStore = useFeedbackStore();

defineProps<{ product: IApiStoreProductType }>();

const addProductToCart = (product: IApiStoreProductType) => {
  if (!userStore.isUserLogin) {
    feedbackStore.showToast({ text: 'Пожалуйста залогиньтесь что бы продолжить', color: 'danger' });
    return
  }
  userStore.userCart.push(product);
  userStore.saveCartToLocalStorage();
  feedbackStore.showToast({ text: 'Товар добавлен в корзину', color: 'success' });
}
</script>
<template>
  <v-card class="product-card" elevation="2">
    <img class="product-card__image" :src="product.image" :alt="product.title" />

    <p class="product-card__title">
      Название
      <span class="product-card__value">{{ product.title }}</span>
    </p>

    <p class="product-card__description">
      Описание
      <span class="product-card__value">{{ product.description }}</span>
    </p>

    <p class="product-card__price">
      Стоимость
      <span class="product-card__price-value">{{ product.price }} $</span>
    </p>

    <div class="product-card__rating">
      Рейтинг
      <span class="product-card__rating-value">★ {{ product.rating.rate }}</span>
      <span class="product-card__rating-label">Остаток</span>
      <span class="product-card__rating-count">({{ product.rating.count }})</span>
    </div>

    <footer class="product-card__footer">
      <add-to-chart @click="addProductToCart(product)" />
    </footer>
  </v-card>
</template>

<style scoped lang="scss">
.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(var(--v-theme-accent));
  border-radius: $border-radius;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: rgb(var(--v-theme-primary));
  padding-inline: 5px;

  &__image {
    max-height: 300px;
    padding: 10px;
    border-radius: $border-radius;
  }

  &__title,
  &__description,
  &__price {
    font-family: semibold, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__value {
    display: block;
    font-family: regular, sans-serif;
    font-size: 14px;
    text-transform: none;
    font-weight: normal;
  }

  &__price-value {
    display: block;
    font-family: medium, sans-serif;
    font-size: 14px;
    color: $button-background;
  }

  &__rating {
    font-family: semibold, sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;

    &-value,
    &-label,
    &-count {
      display: block;
      font-family: regular, sans-serif;
      font-size: 14px;
      text-transform: none;
      font-weight: normal;
    }
  }

  &__footer {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
  }
}
</style>

