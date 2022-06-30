const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/perfil', usuarioController.perfil);
router.get('/perfil/editar', usuarioController.editar);

module.exports = router;