const produtoController = {
    produtos: async  (req, res)=>{
        const products = await Products.findAll()
        res.render('listagem-produto', {products})
    },

    detalhes: (req, res)=>{
        res.render('produto-interna')
    },
}

module.exports = produtoController;