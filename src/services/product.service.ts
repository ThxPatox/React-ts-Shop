import type { IProduct } from "../models/product.model";

const API_URL = "/data/products.json";

export const getProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(`Error al obtener productos: ${response.status}`);
  }

  return response.json();
};