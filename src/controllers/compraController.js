const { where } = require('sequelize/types');
const { PagamentoFinalizado } = require ('../models');

(async () =>{

    const pagamento = require ('../models');
    await pagamento.sync();
})

const compraController = {
    sucesso: (req, res)=>{
        res.render('pagina-de-sucesso')
    },
    //Create
pagamento: async (req, res)=>{
    const { tipoPagamento, banco, bandeira, conta, cvv, validade } = red.body;

    const dadosCartao = await PagamentoFinalizado.create({
        tipoPagamento,
        banco,
        bandeira,
        conta,
        cvv,
        validade
    })
    console.log(dadosCartao);

    const cartaoDados = await PagamentoFinalizado.findAll();
    console.log(cartaoDados);

    //Update
    dadosCartao.descricao = 'fazer alteração';
    await dadosCartao.save();


    //Delete
    await dadosCartao.destroy();
}

}

module.exports = compraController;