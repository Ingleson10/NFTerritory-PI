const { Usuario } = require('../database/models');
const bcrypt = require('bcrypt');

const usuarioController = {
    perfil: async (req, res) => {
        const { id } = JSON.parse(req.cookies.usuario)
        const user = await Usuario.findOne({
            where: {
                id
            }
        })
        res.render('painel-do-usuario', { user })
    },

    editar: async (req, res) => {
        const { id } = JSON.parse(req.cookies.usuario)
        const user = await Usuario.findOne({
            where: {
                id
            }
        })
        res.render('painel-do-usuario-detalhado', { user })
    },

    alterarCadastro: async (req, res) => {
        const { nome_completo, nome_usuario, senha, telefone, email, CPF, site } = req.body
        try {
            const { id } = JSON.parse(req.cookies.usuario)
            const user = await Usuario.update(
                {
                    nome_completo,
                    nome_usuario,
                    senha: bcrypt.hashSync(senha, 10),
                    telefone,
                    email,
                    CPF,
                    site
                },{
                    where: { id }
                })
            res.render('painel-do-usuario', { user });
        } catch (error) {
            console.log(error);
            res.render('painel-do-usuario-detalhado', { user, error: 'Não foi possível atualizar seus dados' })
        }

}
}

module.exports = usuarioController