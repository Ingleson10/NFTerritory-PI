const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/perfil', (req, res, next)=>{
    res.status(200).send
});
router.get('/perfil/editar', (req, res, next)=>{
    res.status(200).send
});

module.exports = router;