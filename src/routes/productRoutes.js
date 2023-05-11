const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/news', productController.news)
router.get('/offers', productController.offers)
router.get('/detail/:id', productController.detail )
router.get('/cart', productController.cart )
router.get('/create',productController.create)
router.get('/edit/:id',productController.edit)
module.exports = router