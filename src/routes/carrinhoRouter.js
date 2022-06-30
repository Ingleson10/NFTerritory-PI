const express = require('express');
const carrinhoController = require('../controllers/carrinhoController');
const router = express.Router();

router.get('/carrinho' , carrinhoController.view)

module.exports = router