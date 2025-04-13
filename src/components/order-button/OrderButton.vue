<script setup lang="ts">
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import { useRouter } from "vue-router";
import { ERouteNames } from "@/router/ERouteNames.ts";

const feedbackStore = useFeedbackStore();
const router = useRouter();

defineProps({
  totalPrice: {
    type: Number,
  }
})

const finishOrder = async () => {
  await router.push({ name: ERouteNames.SHOP })
  feedbackStore.showToast({ text: 'Товар успешно оплачен! Спасибо за покупку', color: 'success' });
}
</script>

<template>
<button type="button" class="action-button" @click="finishOrder">Оплатить {{ totalPrice }}$</button>
</template>

<style scoped lang="scss">
</style>
