const sairController = {
  sair: (req, res) => {
    res.clearCookie('usuario');
    res.redirect('/login');
  }
}

module.exports = sairController;