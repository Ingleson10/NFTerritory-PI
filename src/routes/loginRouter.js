const express = require('express')
const router = express.Router()
const loginController = require('../controllers/loginController')

router.get('/', loginController.login)
router.post('/login', loginController.loginUsuario)
module.exports  = router