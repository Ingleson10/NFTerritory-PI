const { Produto } = require('../database/models')
const { Carrinho } = require('../database/models')
const formatarPreco = require('../utils/formatarPreco')

const carrinhoController = {
    view: async (req, res) =>{
      const produtos = await Produto.findAll({limit:3})
      const carrinho = await Carrinho.findAll({})
      const { id } = JSON.parse(req.cookies.usuario)
          res.render('carrinho', { produtos, carrinho, formatarPreco })
      }
    }

module.exports = carrinhoController