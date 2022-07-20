const express = require('express');
const router = express.Router();

const carrinhoController = require('../controllers/carrinhoController');

router.get('/' , carrinhoController.view)

module.exports = router