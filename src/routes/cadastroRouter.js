const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');
const validarCadastro = require('../middlewares/validarCadastro')

router.get('/', cadastroController.cadastrar);
router.post('/', validarCadastro, cadastroController.cadastrarUsuario)

module.exports = router;