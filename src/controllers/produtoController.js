const produtoController = {
    produtos: (req, res)=>{
        res.render('listagem-produto')
    },

    detalhes: (req, res)=>{
        res.render('produto-interna')
    },
}

module.exports = produtoController;