const { Produto } = require('../database/models')
const formatarPreco = require('../utils/formatarPreco')

const carrinhoController = {
    view: (req, res) =>{
        Produto.findAll({ limit: 3 }).then((resultado)=>{
            res.render('carrinho', { produtos: resultado, formatarPreco })
        }).catch(error => console.log(error))
    }
}
module.exports = carrinhoController