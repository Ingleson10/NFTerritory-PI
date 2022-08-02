const crudController = {
    index: (req,res) => {
        res.render('crud')
    },
    cadastro: (req,res)=>{
        if(!req.file) return res.send('Arquivo não Enviado')
        return res.send('Arquivo Enviado!')
    }
}

module.exports = crudController