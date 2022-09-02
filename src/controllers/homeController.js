const { Produto } = require("../database/models");
const formatarPreco = require("../utils/formatarPreco");
const homeController = {
  index: (req, res) => {
    Produto.findAll({ limit: 3 }).then((resultado) => {
      res.render("home", { produtos: resultado, formatarPreco });
    }).catch(error => console.log(error));
  },
  paginaEmConstrucao: (req, res) => {
    res.render("paginaEmConstrucao");
  },
};
module.exports = homeController;
