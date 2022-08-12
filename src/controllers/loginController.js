const { Usuario } = require('../database/models')
const bcrypt = require('bcrypt')

const loginController = {
    login: (req, res) => {
        res.render('login')
    },
    logarUsuario: (req, res) => {
        const { email, senha, lembrar } = req.body;
        const lembrarUsuario = !!lembrar;

        Usuario.findOne({
            where: {
                email,
            }
        }).then((usuario) => {
            if(!usuario){
                return res.render('login', { error: 'Usuário não cadastrado'})
            }

            if(!bcrypt.compareSync(senha, usuario.senha)){
                return res.render('login', { error: 'Email ou senha incorretos'})
            }

            req.session.usuarioLogado = usuario

            if(lembrarUsuario){
                res.cookie('usuario', JSON.stringify({ email: usuario.email, nome: usuario.nome_usuario, admin: usuario.admin}), { maxAge: 90000 })
                console.log(req.cookies.usuario)
                //cookie vindo undefined, mas em aplication no navegador os dados do usuario aparecem (?)
            }

            res.redirect('/usuario/perfil')      
        }).catch((error) => console.log(error))
    }
}

module.exports = loginController