const cadastroController = {
    cadastrar: (req, res)=>{
        res.render('cadastro')
    },

    register: (req, res) => {
        const {email, senha} = req.body

        Usuario.create()
    }
}

module.exports = cadastroController;