const express = require('express')
const router = express.Router()
const path = require('path')

const userController = require('../controllers/userController')

const registerValidation = require('../middlewares/registerValidation')
const loginValidation = require('../middlewares/loginValidation')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

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
router.get('/login',guestMiddleware, userController.login)
router.post('/login', loginValidation ,userController.processLogin)

//PROCESO DE REGISTRO
router.get('/register', guestMiddleware, userController.register)
router.post('/register', upload.single('filename'), registerValidation, userController.processRegister)

router.get('/profile',authMiddleware, userController.profile)

router.get('/logout', userController.logout)

module.exports = router