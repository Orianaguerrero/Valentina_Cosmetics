const path = require('path')
const db = require('../database/models');
const sequelize = db.sequelize;

const homeController = {
    home: async (req,res) => {
        const products = await db.Product.findAll()
        res.render('home.ejs', {title: 'Inicio - Valentina Cosmetics', products})
    } 
}
module.exports = homeController