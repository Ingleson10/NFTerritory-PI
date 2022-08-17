const { Usuario } = require('../database/models');

const verificarSeUsuarioEhAdmin = async (req, res, next) => {
    const { email } = JSON.parse(req.cookies.usuario)
    const user = await Usuario.findOne({
        where: {
            email
        }
    })
    if(user && !user.admin){        
        return res.redirect('/')
    }
    next()
}

module.exports = verificarSeUsuarioEhAdmin;