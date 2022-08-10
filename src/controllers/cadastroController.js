const cadastroController = {
    cadastrar: (req, res)=>{
        res.render('cadastro')
    },
    novoCadastro: (req, res)=>{
        
        console.log(req.body);
    },

    register: (req, res) => {
        const {email, senha} = req.body

        Usuario.create()

    }
}


module.exports = cadastroController;