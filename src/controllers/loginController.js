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
                var farFuture = new Date(new Date().getTime() + (1000606024365*10)); // ~10y
                res.cookie('usuario', JSON.stringify({ email: usuario.email, nome: usuario.nome_usuario, admin: usuario.admin}), { maxAge: farFuture })
            }

            res.redirect('/usuario/perfil')      
        }).catch((error) => console.log(error))
    }
}

module.exports = loginController