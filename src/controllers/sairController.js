const sairController = {
  sair: (req, res) => {
    if(!req.cookies.usuario){
      return res.redirect('/')
    }else{
    res.clearCookie('usuario');
    res.redirect('/login');
}}
}

module.exports = sairController;