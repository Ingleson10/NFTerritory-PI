const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const produtoController =require('../controllers/produtoController')
router.get('/', homeController.index);
router.get('/error', homeController.paginaEmConstrucao);

module.exports = router;


 