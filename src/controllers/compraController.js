const { sequelize } = require("../database/models")
const { create, store } = require('../database/models/PedidoFinalizado')

const compraController = {
    sucesso: (req, res)=>{
        res.render('pagina-de-sucesso')
    },
    
    adicionarCartao: (req, res)=>{
        res.render('finalizacao-compra')
    },

    create: (req, res)=>{
        return res.render('../database/models');
    },

    store: async (req, res)=>{
        const {total, dataCompra, usuario, pagamento, produto} = req.body
    

    if (!req.file) dadosPath = this.dadosPath.join(__dirname, '..')
    else dadosPath = req.file.dadosPath

    if (!dados) throw new Error('dados inválidos para a compra')

    const newDados = await Dados.create({

        total: total.Dados,
        dataCompra: dataCompra.Dados,
        usuario: usuario.Dados,
        pagamento: pagamento.Dados,
        produto: produto.Dados,

    })

    if (permissions && permissions.length > 0) dados.setPermissions(permissions)
    else dados.setPermissions([3])

    return res.status(201).json(dados)

    },

}



module.exports = compraController