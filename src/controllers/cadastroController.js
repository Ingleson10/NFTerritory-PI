const cadastroController = {
    cadastrar: (req, res)=>{
        res.render('cadastro')
    },
    novoCadastro: (req, res)=>{
        
        console.log(req.body);
    }
}


module.exports = cadastroController;