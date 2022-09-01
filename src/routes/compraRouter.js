const express = require('express');
const router = express.Router();
const compraController = require('../controllers/compraController');

router.get('/sucesso', compraController.sucesso);
router.get('/', compraController.adicionarCartao);

module.exports = router