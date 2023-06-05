const path = require('path')
const fs = require('fs');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const userController = {

    login: (req, res) => {
        res.render('users/login.ejs', {title: 'Iniciar sesión'})
    },
    processLogin: (req,res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0){
            return res.render('users/login.ejs', { 
                errors : resultValidation.mapped(),
                title : 'Inicio de sesión',
                oldData: req.body
            })
        } else {
            let userToLogin = users.find(user => user.email === req.body.email)
            if(userToLogin){
                let isOkPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
                if (isOkPassword){
                    req.session.userLogged = userToLogin
                    return res.redirect('/users/profile')
                }
            }
        }
        return res.render('users/login.ejs', {
            title: 'Inicio de sesión',
            errors: {
                email: {
                    msg: 'Credenciales inválidas'
                }
            }
        })
    },
    
    register: (req, res) => {
        res.render('users/register.ejs', {title: 'Registrarse'})
    },
    processRegister: (req,res) => {
       const resultValidation = validationResult(req);
       if (resultValidation.errors.length > 0){
        return res.render('users/register.ejs', { 
            errors : resultValidation.mapped(),
            title : 'Registrarse',
            oldData: req.body
        })
         } else {
            let newUser = {
                id : users.length + 1,
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                category: "user",
                image: req.file ? req.file.filename : "logo.png"
            }
            users.push(newUser)
            let usersJson = JSON.stringify(users, null , 2) 
            fs.writeFileSync(usersFilePath, usersJson , "utf-8")
            res.redirect('/users/login')
        }
    },
    profile: (req, res) => {
        
    return res.render('users/profile.ejs', { 
        title: 'Perfil de usuario',
        user: req.session.userLogged
    })
    },
    logout: (req,res) => {
         req.session.destroy();
         return res.redirect('/')
    }
}
module.exports = userController