<script setup lang="ts">
import { computed, ref } from "vue"
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import ProductInChartCard from "@/components/product-in-chart-card/ProductInChartCard.vue";
import OrderButton from "@/components/order-button/OrderButton.vue";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";

const userStore = useUserStore();

const userChartProducts = userStore.userCart as IApiStoreProductType[]

// Создаем объект для хранения количества каждого товара
const counters = ref<Record<IApiStoreProductType['id'], number>>({})

// Инициализация
userChartProducts.forEach(product => {
  counters.value[product.id] = 1
})

// Вычисляем общую стоимость
const totalPrice = computed(() => {
  return userChartProducts.reduce((total, product) => {
    return total + (product.price * (counters.value[product.id]))
  }, 0)
})

const handleItemUpdate = (updatedItem: {
  id: IApiStoreProductType['id']
  quantity: number
}) => {
  counters.value[updatedItem.id] = updatedItem.quantity
}

</script>

<template>
  <v-container>
<div class="user-chart">
  <header class="user-chart__header">
    <h1>Корзина</h1>
  </header>
  <v-row class="user-chart__content">
    <v-col
      v-for="product in userChartProducts"
      :key="product.id"
      cols="12"
      sm="12"
      md="12"
      lg="6"
    >
    <product-in-chart-card
      :product="product"
      v-model:counter="counters[product.id]"
      @update:total="handleItemUpdate"
    />
</v-col>
    </v-row>
  <div v-if="userStore.userCart.length > 0" class="user-chart__total-price">
<order-button :totalPrice="totalPrice" />
  </div>
</div>
    </v-container>
</template>

<style scoped>
.user-chart {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.user-chart__content {
  margin: 0 auto;
}
.user-chart__header {
  text-align: center;
  margin-bottom: 16px;
}

.user-chart__total-price {
  display: flex;
  justify-content: flex-end;
}
</style>
