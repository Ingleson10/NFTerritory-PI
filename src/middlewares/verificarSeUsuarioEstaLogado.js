const verificarSeUsuarioEstaLogado = (req, res, next) => {
    if (!req.cookies.usuario) {
      return res.redirect('login');
    }
  
    req.usuario = JSON.parse(req.cookies.usuario);
    next();
  
  }
  
  module.exports = verificarSeUsuarioEstaLogado;