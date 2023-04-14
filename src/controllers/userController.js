const path = require('path')
const userController = {
    login: (req, res) => res.render('users/login.ejs', {title: 'Iniciar sesión'}),

    register: (req,res) => res.render('users/register.ejs', {title: 'Registrarse'})
}
module.exports = userController