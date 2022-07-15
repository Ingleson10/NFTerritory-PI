const express = require('express');
const router = express.Router();
const produtoInternaController = require('../controllers/produtoController');

router.get('/detalhes', produtoInternaController.detalhes);

module.exports = router;