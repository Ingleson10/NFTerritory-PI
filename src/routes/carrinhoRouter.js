const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/carrinho' , carrinhoController.view)

module.exports = router