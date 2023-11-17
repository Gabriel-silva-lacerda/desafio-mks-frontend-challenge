export function formatNumber(price: number | string) {
  return Number(price).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}
