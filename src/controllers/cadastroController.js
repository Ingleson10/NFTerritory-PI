const { Usuario } = require('../database/models')
const bcrypt = require('bcrypt')

const cadastroController = {
    cadastrar: (req, res)=>{
        res.render('cadastro')
    },
    cadastrarUsuario: async (req, res)=>{
        const { nome_completo, nome_usuario, senha, telefone, email, CPF, site } = req.body
        const senhaHash = bcrypt.hashSync(senha, 10)
        const usuario = await Usuario.findOne({
            where: {
                email
            }
        })
        console.log(usuario)
        if(usuario){
            return res.render('cadastro', { erro: 'E-mail já cadastrado', oldData: req.body })
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
console.log()