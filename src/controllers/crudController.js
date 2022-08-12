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

     //bulkCreate: async (req, res)=>{

    //    const listaDeProdutos = [
            
    //        {NomeDoProduto: 'teste 1', DescricaoDoProduto: 'teste 2', Preco: 'teste 3', Categoria: 'teste 4', Imagem: 'teste 5'},
    //        {NomeDoProduto: 'teste 1', DescricaoDoProduto: 'teste 2', Preco: 'teste 3', Categoria: 'teste 4', Imagem: 'teste 5'},
    //       {NomeDoProduto: 'teste 1', DescricaoDoProduto: 'teste 2', Preco: 'teste 3', Categoria: 'teste 4', Imagem: 'teste 5'},
    //        {NomeDoProduto: 'teste 1', DescricaoDoProduto: 'teste 2', Preco: 'teste 3', Categoria: 'teste 4', Imagem: 'teste 5'},
    //   ]

    //    const resultado = cadastro.bulkCreate(listaDeProdutos)
    //    console.log(resultado)

    //    res.send('criados')


//    }
}

module.exports = crudController