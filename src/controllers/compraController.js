const compraController = {
    sucesso: (req, res)=>{
        res.render('pagina-de-sucesso')
    },
    
    adicionarCartao: (req, res)=>{
        res.render('finalizacao-compra')
    },
}


module.exports = compraController