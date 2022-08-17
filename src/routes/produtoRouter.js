const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.produtos);
router.get('/2d', produtoController.artes2d)
router.get('/3d', produtoController.artes3d)
router.get('/fotografias', produtoController.fotografias)
router.get('/colecionaveis', produtoController.colecionaveis)
router.get('/detalhes/:id', produtoController.detalhes);

module.exports = router;