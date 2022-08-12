const { Usuario } = require('../database/models');

const verificarSeUsuarioEhAdmin = (req, res, next) => {
    if(!Usuario.admin){
        return res.redirect('/')
    }
    next()
}

module.exports = verificarSeUsuarioEhAdmin;