const {Produto} = require("../database/models");
const formatarPreco = require("../utils/formatarPreco");
const compraController = {
  sucesso: (req, res) => {
    res.render("pagina-de-sucesso");
  },

  finalizar: (req, res) => {
    const { id } = req.params;
    Produto.findOne({where:{id}})
    .then((resultado) => {
        res.render('finalizacao-compra', { produto: resultado, formatarPreco })
    }).catch(error => console.log(error))
  },
};

module.exports = compraController;
