const express = require('express');
const router = express.Router();
const produtoInternaController = require('../controllers/produtoInterna');

router.get('/nomeProduto', produtoInternaController.nomeProduto);

module.exports = router;