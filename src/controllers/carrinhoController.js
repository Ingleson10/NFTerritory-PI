const { PedidoFinalizado } = require("../models")

const carrinhoController = {
    renderFinalizacao: (req, res) =>{
        res.render('finalizacao-compra')
    },

finalizar: async (req, res)=>{
    const { total, dataCompra, pagamento, produto} = req.body;

    const dados = await PedidoFinalizado.create({
        total,
        dataCompra,
        pagamento,
        produto
    })

try {
    await dados.authenticate();
    console.log('Conexão bem sucedida!')
} catch (error){
    console.log('Conexão não sucedida!!', error);
}
}

}
module.exports = carrinhoController;