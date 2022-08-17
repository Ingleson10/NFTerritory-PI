const { Usuario } = require('../database/models')
// const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')

const cadastroController = {
    cadastrar: (req, res)=>{
        res.render('cadastro')
    },
    cadastrarUsuario: (req, res)=>{
        const { nome_completo, nome_usuario, senha, telefone, email, CPF, site } = req.body
        const senhaHash = bcrypt.hashSync(senha, 10)
        // let errors = validationResult(req)

        // if(!errors.isEmpty()){
        //     res.render('cadastro', { errors: errors.mapped(), old:req.body})
        // }

        Usuario.findAll({
            where: {
                email
            }
        }).then((usuario)=>{
            if(usuario.email === email){
                return res.render('cadastro', { error: 'Usuário já cadastrado' })
            }
        
        Usuario.create({
            nome_completo,
            nome_usuario,
            senha: senhaHash,
            telefone,
            email,
            CPF,
            site
        })})
        .then(()=>{
            res.redirect('login')
        }).catch(error=>{console.log(error)})
    }
}

module.exports = cadastroController;