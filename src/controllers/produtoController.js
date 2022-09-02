const { Produto } = require('../database/models')
const formatarPreco = require('../utils/formatarPreco')
const adicionarNoCarrinho = require('../utils/carrinho')

const produtoController = { 
    produtos: (req, res) => {
        Produto.findAll({}).then((resultado)=>{
            res.render('listagem-produto', { produtos: resultado, formatarPreco })
        }).catch(error => console.log(error))
    },
    artes2d: (req, res) => {
        Produto.findAll({
            where: {
                categoria_id: 1
            }
        }).then((resultado)=>{
            res.render('listagem-produto', { produtos: resultado, formatarPreco })
        }).catch(error => console.log(error))
    },
    artes3d: (req, res) => {
        Produto.findAll({
            where: {
                categoria_id: 2
            }
        }).then((resultado) => {
            res.render('listagem-produto', { produtos: resultado, formatarPreco })
        }).catch(error => console.log(error))
    },
    fotografias: (req, res) => {
        Produto.findAll({
            where: {
                categoria_id: 3
            }
        }).then((resultado) => {
            res.render('listagem-produto', { produtos: resultado, formatarPreco })
        }).catch(error => console.log(error))
    },
    colecionaveis: (req, res) => {
        Produto.findAll({
            where: {
                categoria_id: 4
            }
        }).then((resultado) => {
            console.log(resultado)
            res.render('listagem-produto', { produtos: resultado, formatarPreco })
        }).catch(error => console.log(error))
    },
    detalhes: (req, res) => {
        const idUrl = req.params.id;
        const { id } = JSON.parse(req.cookies.usuario)

        Produto.findOne({
            where: {
                id: idUrl
            }
        }).then((resultado) => {
            res.render('produto-interna', { produto: resultado, formatarPreco, id, adicionarNoCarrinho })
        }).catch(error => console.log(error))
    },
}

module.exports = produtoController;