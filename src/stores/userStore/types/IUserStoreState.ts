import type {IApiStoreProductType} from "@/stores/apiStore/types/IApiStoreProductType.ts";

export interface IUserStoreState {
  isUserLogin: boolean,
  currentCategory: string,
  userCart: IApiStoreProductType[],
  searchQuery: string,
  sortOption: string,
  itemsPerPage: number
}
