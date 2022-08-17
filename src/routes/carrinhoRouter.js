const express = require('express');
const router = express.Router();
const verificarSeUsuarioEstaLogado = require('../middlewares/verificarSeUsuarioEstaLogado')
const carrinhoController = require('../controllers/carrinhoController');

router.get('/' , verificarSeUsuarioEstaLogado, carrinhoController.view)

module.exports = router