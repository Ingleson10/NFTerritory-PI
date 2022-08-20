const { Produto } = require('../database/models');

const crudController = {
    index: (req, res) => {
        res.render('crud')
    },
    cadastro: (req, res) => {
        const { nome, artista, preco, categoria_id, disponibilidade } = req.body
        console.log(req.body)
        const filename = req.file.filename
        if(!req.file) return res.send('Selecione um arquivo')
        // const extensaoDoArquivo = filename.split(".")[1].toLowerCase();

        // if (extensaoDoArquivo !== "jpg" && extensaoDoArquivo !== "png") {
        // return res.render('cadastro', { error: 'Formato do arquivo é inválido' })
        // }

        Produto.create({
            nome,
            artista,
            preco,
            categoria_id,
            disponibilidade,
            imageUrl: filename
        }).then(res.render('crud', ))
    }
}

module.exports = crudController