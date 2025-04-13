<script setup lang="ts">
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import AddToChart from "@/components/add-to-chart-button/AddToChart.vue";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";

const userStore = useUserStore();
const feedbackStore = useFeedbackStore();

defineProps<{ product: IApiStoreProductType }>();

const addProductToCart = (product: IApiStoreProductType) => {
  if (!userStore.isUserLogin) {
    feedbackStore.showToast({ text: 'Пожалуйста залогиньтесь что бы продолжить', color: 'danger' });
    return
  }
  userStore.userCart.push(product);
  feedbackStore.showToast({ text: 'Товар добавлен в корзину', color: 'success' });
}
</script>

<template>
  <v-card class="product-card" elevation="2">
    <img class="product-card__image" :src="product.image" :alt="product.title" />
    <p class="product-card__title describe">Название <span class="block">{{ product.title }}</span></p>
    <p class="product-card__description describe">Описание <span class="block">{{ product.description }}</span></p>
    <p class="product-card__price describe coast">Стоимость <span class="block coast">{{ product.price }} $ </span></p>
    <div class="product-card__rating describe">
      Рейтинг
      <span class="block rate">★ {{ product.rating.rate }}</span>
      <span class="block describe">Остаток</span>
      <span class="block count">({{ product.rating.count }})</span>
    </div>
    <footer class="product-card__footer">
      <add-to-chart @click="addProductToCart(product)"/>
    </footer>
  </v-card>
</template>

<style scoped lang="scss">

.product-card {
    max-width: 510px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid rgb(var(--v-theme-accent));
    border-radius: $border-radius;
    margin-bottom: 10px;
    cursor: pointer;
    background-color: rgb(var(--v-theme-primary));
    padding-inline: 5px;
}

.product-card__image {
  max-height: 300px;
  padding: 10px;
  border-radius: $border-radius;
}

.describe {
  font-family: semibold, sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
.block {
  display: block;
  font-family: regular, sans-serif;
  font-size: 14px;
}

.coast {
  color: $button-background;
}

.product-card__footer {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
}
</style>
