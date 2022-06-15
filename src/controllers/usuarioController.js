const usuarioController = {
    perfil: (req, res)=>{
        res.render('painel-do-usuario')
    },

    editar: (req, res)=>{
        res.render('painel-do-usuario-detalhado')
    }
}

module.exports = usuarioController