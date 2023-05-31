const express = require('express')
const router = express.Router()
const path = require('path')
const userController = require('../controllers/userController')

const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage})

//PROCESO DE INICIO DE SESION
router.get('/login', userController.login)

//PROCESO DE REGISTRO
router.get('/register', userController.register)
router.post('/register', upload.single('filename'),userController.create)

module.exports = router