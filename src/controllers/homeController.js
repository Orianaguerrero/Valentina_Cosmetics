const path = require('path')
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const homeController = {
    home: (req,res) => {
    res.render('home.ejs', {title: 'Inicio - Valentina Cosmetics', products : products})
    } 
}
module.exports = homeController