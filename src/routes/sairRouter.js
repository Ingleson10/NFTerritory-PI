const express = require('express');
const sairController = require('../controllers/sairController');
const router = express.Router();

router.get('/sair', sairController.sair);

module.exports = router;