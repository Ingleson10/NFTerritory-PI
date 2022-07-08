const express = require('express');
const router = express.Router();
const produtoInternaController = require('../controllers/cadastro');

router.get('/cadastrarUsuario', cadastroController.cadastrarUsuario);

module.exports = router;