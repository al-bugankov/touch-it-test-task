<script setup lang="ts">
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useRouter } from "vue-router";
import { ERouteNames } from "@/router/ERouteNames.ts";

const feedbackStore = useFeedbackStore();
const userStore = useUserStore();
const router = useRouter();

defineProps({
  totalPrice: {
    type: Number,
  }
})

const finishOrder = async () => {
  userStore.userCart = []
  userStore.saveCartToLocalStorage()
  await router.push({ name: ERouteNames.SHOP })
  feedbackStore.showToast({ text: 'Товар успешно оплачен! Спасибо за покупку', color: 'success' });
}
</script>

<template>
<button type="button" class="action-button" @click="finishOrder">Оплатить {{ totalPrice }}$</button>
</template>

<style scoped lang="scss">
</style>
