const express = require('express');
const finalizaCompraController = require('../controllers/finalizaCompra');
const router = express.Router();

router.get('/adicionarCartao', finalizaCompraController.adicionarCartao);

module.exports = router;