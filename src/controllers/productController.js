const path = require('path')
const productController = {
    detail: (req,res) => res.render('products/product-detail.ejs', {title: 'Detalle del producto'}),
    
    cart: (req,res) => res.render('products/cart.ejs', {title: 'Carrito'}),

    new: (req,res) => res.render('products/product-new.ejs', {title: 'Nuevo producto'}),

    edit: (req,res) => res.render('products/product-edit.ejs', {title: 'Editar Producto'})
}
module.exports = productController