import type { IProduct } from "./product.model";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}