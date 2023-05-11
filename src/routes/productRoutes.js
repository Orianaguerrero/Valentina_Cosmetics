const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/detail/:id', productController.detail )
router.get('/cart', productController.cart )
router.get('/new',productController.new)
router.get('/edit',productController.edit)
module.exports = router