const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificarSeUsuarioEstaLogado = require('../middlewares/verificarSeUsuarioEstaLogado')

router.get('/perfil', verificarSeUsuarioEstaLogado, usuarioController.perfil);
router.get('/perfil/editar', verificarSeUsuarioEstaLogado,  usuarioController.editar);

module.exports = router;