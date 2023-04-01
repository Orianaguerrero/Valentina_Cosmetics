const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

router.get('/detail', productController.detail )
router.get('/cart', productController.cart )
module.exports = router