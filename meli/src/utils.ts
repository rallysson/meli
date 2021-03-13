export function formatCurrency(price: number, currency: string) {
  return price.toLocaleString("pt-BR", { style: "currency", currency });
}
