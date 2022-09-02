const { Carrinho } = require('../database/models')

function adicionarNoCarrinho(idProduto, idUsuario){
    Carrinho.create({
        idProduto,
        idUsuario
    })
}

module.exports = adicionarNoCarrinho