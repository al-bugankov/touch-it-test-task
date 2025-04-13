import { defineStore } from 'pinia'
import type { IFeedbackStoreState} from "@/stores/feedbackStore/types/IFeedbackStoreState.ts";
import type { IToastType } from "@/stores/feedbackStore/types/IToastType.ts";

export const useFeedbackStore = defineStore('feedbackStore', {
  state: (): IFeedbackStoreState => ({
    isGlobalLoading: false,
    snackbar: {
      visible: false,
      text: '',
      color: 'info',
      timeout: 3000,
    }
  }),
  getters: {},
  actions: {
    showToast(payload: Partial<IToastType['snackbar']>) {
      this.snackbar.visible = false
      this.snackbar.text = payload.text ?? ''
      this.snackbar.color = payload.color ?? 'info'
      this.snackbar.timeout = payload.timeout ?? 3000
      requestAnimationFrame(() => {
        this.snackbar.visible = true
      })
    }
  }
})
