const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/cadastro', cadastroController.cadastrar);
router.post('/cadastro', cadastroController.cadastrar)
router.get('/login', cadastroController.cadastrar);
router.post('/login', cadastroController.register)


module.exports = router;