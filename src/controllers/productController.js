const path = require('path')
const productController = {
    detail: (req,res) => res.render('products/product-detail.ejs', {title: 'Detalle del producto'}),
    
    cart: (req,res) => res.render('products/cart.ejs', {title: 'Carrito'})
}
module.exports = productController