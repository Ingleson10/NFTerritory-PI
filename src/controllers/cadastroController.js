const { Usuario } = require('../database/models')
const validarCadastro = require('../utils/validarCadastro')
const bcrypt = require('bcrypt')

const cadastroController = {
    cadastrar: (req, res)=>{
        res.render('cadastro')
    },
    cadastrarUsuario: async (req, res)=>{
        const { nome_completo, nome_usuario, senha, telefone, email, CPF, site } = req.body
        const senhaHash = bcrypt.hashSync(senha, 10)
        await Usuario.findAll({
            where: {
                email
            }
        })

        const { error } = validarCadastro.validate(req.body, { abortEarly: false })
            if (error){
                return res.redirect('cadastro', { errors: error.details, old:req.body })
            }      
        Usuario.create({
            nome_completo,
            nome_usuario,
            senha: senhaHash,
            telefone,
            email,
            CPF,
            site
        })
        .then(()=>{
            res.redirect('login')
        }).catch(error=>{console.log(error)})
    }
}

module.exports = cadastroController;