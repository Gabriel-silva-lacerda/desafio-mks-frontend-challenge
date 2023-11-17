export const calculateTotalPrice = (cart) => {
  return cart.reduce((acc, item) => {
    const itemTotal = Number(item.price) * item.qtd;
    return acc + itemTotal;
  }, 0);
};
