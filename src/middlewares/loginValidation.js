const { body } = require('express-validator')

const loginValidation = [
    body('email').notEmpty().withMessage('Debes ingresar un email').isEmail().withMessage('Debes ingresar un formato de correo válido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña'),
]

module.exports = loginValidation;




