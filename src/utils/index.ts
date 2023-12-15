export function formatCurrency(value: number, toServer = false) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(toServer ? value / 100 : value)
}
