const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');

router.get('/cadastrar', cadastroController.cadastrar);
router.post('/cadastrar', casdastroController.register)

module.exports = router;