import { ProductsData } from "../types/apiProducts";

export const calculateTotalPrice = (cart: ProductsData[]) => {
  return cart.reduce((acc, item) => {
    const itemTotal = Number(item.price) * item.qtd;
    return acc + itemTotal;
  }, 0);
};
