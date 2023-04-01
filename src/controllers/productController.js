const path = require('path')
const productController = {
    detail: (req,res) => res.sendFile(path.join(__dirname, '../views/product-detail.html')),
    
    cart: (req,res) => res.sendFile(path.join(__dirname, '../views/cart.html'))
}
module.exports = productController