const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');
const verificarSeUsuarioEstaLogado = require('../middlewares/verificarSeUsuarioEstaLogado')

router.get('/sucesso', verificarSeUsuarioEstaLogado, compraController.sucesso);
router.get('/:id', verificarSeUsuarioEstaLogado, compraController.finalizar);

module.exports = router