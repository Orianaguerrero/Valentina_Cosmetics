const path = require('path')
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    
    detail: (req,res) => {
        let product = products.filter(product => product.id == req.params.id)
        let productFound = product.pop()
        res.render('products/product-detail.ejs', {title: 'Detalle del producto',product : productFound})
    },
    
    cart: (req,res) => res.render('products/cart.ejs', {title: 'Carrito'}),

    new: (req,res) => res.render('products/product-new.ejs', {title: 'Nuevo producto'}),

    edit: (req,res) => res.render('products/product-edit.ejs', {title: 'Editar Producto'})
}
module.exports = productController