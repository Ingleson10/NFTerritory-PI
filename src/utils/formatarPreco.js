function formatarPreco(preco) {
    return Number(preco).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL'
    })
  }
  
  module.exports = formatarPreco