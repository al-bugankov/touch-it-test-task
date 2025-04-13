<script setup lang="ts">
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useRouter } from "vue-router";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";
import { ERouteNames } from "@/router/ERouteNames.ts";
import ProductCounter from "@/components/product-counter/ProductCounter.vue";
import NavButton from "@/components/nav-button/NavButton.vue";

const userStore = useUserStore();
const router = useRouter();

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
}

const goHome = () => {
  router.push({name: ERouteNames.SHOP})
}
</script>

<template>
  <v-card v-if="userStore.userCart.length > 0" class="product-card" elevation="2">
    <img class="product-card__image" :src="props.product.image" :alt="props.product.title" />
    <div class="product-card__content">
      <p class="product-card__title describe">Название <span class="block">{{ props.product.title }}</span></p>
      <p class="product-card__price describe coast">Стоимость <span class="block coast">{{ props.product.price }} $ </span></p>
      <div class="product-card__count describe">Количество <span class="block coast"><product-counter @update:counter="handleCounterUpdate"/></span>
        <div class="product-card__delete-button">
          <nav-button buttonText="Удалить товар" class="action-button" @click="deleteItem(props.product.id)" />
        </div>
    </div>
</div>
  </v-card>
  <div v-else class="product-card__empty">
    <p>Корзина пустая</p>
    <nav-button buttonText="Вернуться на главную" class="action-button" @click="goHome" />
  </div>
</template>

<style scoped lang="scss">

.product-card {
  width: 100%;
  min-width: 350px;
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
}

.product-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-card__image {
  max-width: 150px;
  padding: 5px;
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
}

.product-card__empty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
}

.action-button {
  margin-top: 16px;
}

</style>
