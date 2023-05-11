const path = require('path')
const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productController = {
    
    detail: (req,res) => {
        let product = products.filter(product => product.id == req.params.id)
        let productFound = product.pop()
        res.render('products/product-detail.ejs', {title: 'Detalle del producto',product: productFound})
    },
    news: (req, res) => {
        res.render('products/new-products.ejs', {title: 'Nuevos Productos', products: products})
    },  
    offers: (req, res) => {
        res.render('products/offers-products.ejs', {title: 'Ofertas', products: products})
    },
    cart: (req,res) => res.render('products/cart.ejs', {title: 'Carrito'}),

    create: (req,res) => res.render('products/product-new.ejs', {title: 'Nuevo producto'}),

    edit: (req,res) => {
        let product = products.filter(product => product.id == req.params.id)
        let productFound = product.pop()
        res.render('products/product-edit.ejs', {title: 'Editar Producto', product: productFound})
    }
}
module.exports = productController