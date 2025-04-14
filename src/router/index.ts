import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from "@/stores/userStore/stores/userStore.ts";
import { useFeedbackStore } from "@/stores/feedbackStore/stores/feedbackStore.ts";
import LandingPage from "@/views/LandingPage.vue";
import ProductsList from "@/views/ProductsList.vue";
import UserChart from "@/views/UserChart.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
    },
    {
      path: '/category',
      name: 'category',
      component: ProductsList,
    },
    {
      path: '/chart',
      name: 'chart',
      component: UserChart,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const feedbackStore = useFeedbackStore()

  if (to.name === 'chart' && !userStore.isUserLogin) {
    feedbackStore.showToast({
      text: 'Пожалуйста залогиньтесь',
      color: 'error',
    })
    return next( '/')
  }

  next()
})

export default router
