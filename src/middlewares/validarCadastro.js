const { check } = require('express-validator')

const validarCadastro = [
    check('nome_completo')
        .isEmpty().withMessage('Digite seu nome completo'),
    check('nome_usuario')
        .isEmpty().withMessage('Digite seu nome de usuário'),
    check('email')
        .isEmpty().withMessage('Digite um e-mail').bail()
        .isEmail().withMessage('Digite um e-mail válido'),
    check('telefone')
        .isEmpty().withMessage('Digite seu telefone').bail()
        .isMobilePhone().withMessage('Digite um telefone válido'),
    check('CPF')
        .isEmpty().withMessage('Digite seu CPF').bail()
        .isNumeric().withMessage('Apenas números são aceitos').bail()
        .isLength({min: 11, max: 11}).withMessage('Digite um CPF válido'),
    check('site')
        .isEmpty().withMessage('Digite seu site'),
    check('senha')
        .isEmpty().withMessage('Digite sua senha')
]

module.exports = validarCadastro