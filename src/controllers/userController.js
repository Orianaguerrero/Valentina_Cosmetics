const path = require('path')
const fs = require('fs');
let bcrypt = require('bcrypt')

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const userController = {

    login: (req, res) => {
        res.render('users/login.ejs', {title: 'Iniciar sesión'})
    },
    register: (req, res) => {
        res.render('users/register.ejs', {title: 'Registrarse'})
    },
    create: (req, res) => {
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

}
module.exports = userController