const path = require('path')
const homeController = {
    home: (req,res) => res.render('home.ejs', {title: 'Inicio - Valentina Cosmetics'})
}
module.exports = homeController