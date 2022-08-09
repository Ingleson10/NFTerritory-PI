const { Usuario } = require("../database/models");
const bcrypt = require("bcrypt");

const loginController = {
  renderLogin: (req, res) => {
    res.render("login");
  },

  loginUsuario: (req, res) => {
    const { email, password } = req.body;

    Usuario.findOne({
      where: {
        email,
        password,
      },
    })
      .then((usuario) => {
        console.log(usuario)
        if (!usuario) {
          alert("Usuário não existe");
          res.redirect("/login");
        }

        if (bcrypt.compareSync(password, usuario.password)) {
          res.cookie(
            "usuario",
            JSON.stringify({
              id: usuario.id,
              nome: usuario.nome,
              modelo: usuario.modelo,
            })
          );

          res.redirect("/login");
        }

        res.render("/login");
      })
      .catch((erro) => console.log(erro));
  },

  login: (req, res) => {
    res.render("login");
  },
  registro: (req, res) => {
    res.render("registro");
  },
};

module.exports = loginController;
