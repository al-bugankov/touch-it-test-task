import type { IApiStoreCategoriesType } from "@/stores/apiStore/types/IApiStoreCategoriesType.ts";
import type { IApiStoreProductType } from "@/stores/apiStore/types/IApiStoreProductType.ts";

export interface IApiStoreState {
  categoriesPictures: string[];
  categories: IApiStoreCategoriesType,
  products: IApiStoreProductType[]
}
