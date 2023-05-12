const express = require('express')
const router = express.Router()
const path = require('path')
const productController = require('../controllers/productController')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage})

router.get('/news', productController.news)
router.get('/offers', productController.offers)
router.get('/detail/:id', productController.detail )
router.get('/cart', productController.cart )

router.get('/create', productController.createView)
router.post('/create', upload.single('image'), productController.create)

router.get('/edit/:id',productController.edit)
module.exports = router