import type { IToastType } from "@/stores/feedbackStore/types/IToastType.ts";

export interface IFeedbackStoreState {
  isGlobalLoading: boolean,
  snackbar: IToastType['snackbar']
}
