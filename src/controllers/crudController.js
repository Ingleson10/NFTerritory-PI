const Produto = require("../database/models/Produto")


const crudController = {

    index: (req,res) => {
        res.render('crud')
    },
    cadastro: (req,res)=>{
        if(!req.file) return res.send('Arquivo não Enviado')
        return res.send('Arquivo Enviado!')
    },

    create:(req, res)=>{
        return res.render('/Produto')
    },

    
    store: async (req, res)=>{
        const {nome, preco, disponibilidade, categoria_id } = req.body;

         DatabaseError.crud.create({
            nome,
            preco,
            disponibilidade,
            categoria_id,
                        
        }).then(() => {
            return res.redirect('/')

        }).catch(error => res.send(error))
        
        if(!req.file) return res.send('Informaçoes erradas')
        return res.send('Informacoes erradas!')
    }

}

module.exports = crudController