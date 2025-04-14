<script setup lang="ts">
import {computed, onMounted, ref} from "vue"
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useRouter } from "vue-router";
import { ERouteNames } from "@/router/ERouteNames.ts";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";
import ProductInChartCard from "@/components/product-in-chart-card/ProductInChartCard.vue";
import OrderButton from "@/components/order-button/OrderButton.vue";
import NavButton from "@/components/nav-button/NavButton.vue";

const userStore = useUserStore();
const router = useRouter();

const userChartProducts = computed<IApiStoreProductType[]>(() => userStore.userCart);

// Создаем объект для хранения количества каждого товара
const counters = ref<Record<IApiStoreProductType['id'], number>>({})

// Вычисляем общую стоимость
const totalPrice = computed(() =>
  parseFloat(
    userChartProducts.value
      .reduce((sum, product) => {
        const quantity = counters.value[product.id] || 1;
        return sum + product.price * quantity;
      }, 0)
      .toFixed(2)
  )
);

const handleItemUpdate = (updatedItem: {
  id: IApiStoreProductType['id']
  quantity: number
}) => {
  counters.value[updatedItem.id] = updatedItem.quantity
}

const goHome = () => {
  router.push({name: ERouteNames.SHOP})
}
</script>

<template>
  <v-container>
    <div class="user-chart">
      <header class="user-chart__header">
        <h1>Chart</h1>
      </header>

      <template v-if="userStore.userCart.length > 0">
        <v-row class="user-chart__content">
          <v-col
            v-for="product in userChartProducts"
            :key="product.id"
            cols="12"
            sm="12"
            md="12"
            lg="6"
            class="user-chart__item"
          >
            <product-in-chart-card
              :product="product"
              v-model:counter="counters[product.id]"
              @update:total="handleItemUpdate"
            />
          </v-col>
        </v-row>

        <div class="user-chart__total">
          <order-button :totalPrice="totalPrice" class="user-chart__pay-button" />
        </div>
      </template>

      <template v-else>
        <div class="user-chart__empty">
          <p>Корзина пустая</p>
          <nav-button
            buttonText="Вернуться на главную"
            class="user-chart__action-button"
            @click="goHome"
          />
        </div>
      </template>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.user-chart {
  width: 100%;
  display: flex;
  flex-direction: column;

  &__header {
    text-align: center;
    margin-bottom: 16px;
  }

  &__content {
    width: 100%;
    margin: 0 auto;
  }

  &__item {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  &__total {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }

  &__pay-button {
    margin: 0 auto;
    width: 90%;
    max-width: 360px;
  }

  &__empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 300px;
    font-family: semibold, sans-serif;
    font-size: 24px;
  }

  &__action-button {
    max-width: 360px;
    width: 90%;
    border: none;
    margin-top: 10px;
  }
}
</style>
