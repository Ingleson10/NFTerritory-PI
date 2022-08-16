const { sequelize } = require("../database/models")
const { create, store } = require('../database/models/PedidoFinalizado')

const carrinhoController = {
    view: (req,res) =>{
        res.render('carrinho');
    },

    create:(req, res)=>{
        return res.render('../database/models/');
    },

    store: async (req, res)=>{

    const {tipoPagamento, banco, bandeira, conta, cvv, validade, usuario} = req.body;
    
    
    const dadosCartao = await Cartao.create({

        tipoPagamento: tipoPagamento.Cartao,
        banco: banco.Cartao,
        bandeira: bandeira.Cartao,
        conta: conta.Cartao,
        cvv: cvv.Cartao,
        validade: validade.Cartao,
        usuario: usuario.Cartao,
        
    })

    await Cartao.update(
        {banco: banco.dataValues.id},
        {bandeira: bandeira.dataValues.id},
        {conta: conta.dataValues.id},
        {cvv: cvv.dataValues.id},
        {validade: validade.dataValues.id},
        {usuario: usuario.dataValues.id}
    )

}

}
module.exports = carrinhoController;