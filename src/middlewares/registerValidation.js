const { body } = require('express-validator')

const registerValidation = [
    body('name').notEmpty().withMessage('Debes ingresar un nombre')
    .isLength({min:5}).withMessage('El nombre debe tener al menos 5 caracteres'),
    body('lastName').notEmpty().withMessage('Debes ingresar un apellido'),
    body('email').notEmpty().withMessage('Debes ingresar un email').isEmail().withMessage('Debes ingresar un formato de correo válido'),
    body('password').notEmpty().withMessage('Debes ingresar una contraseña')
]
module.exports= registerValidation