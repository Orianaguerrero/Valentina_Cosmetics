const path = require('path')
const db = require('../database/models');
const sequelize = db.sequelize;

const productController = {
    all: async (req,res) => {
        const products = await db.Product.findAll()
        res.render('products/all-products.ejs', {title: 'Todos los productos', products})
    }, 

    detail: async (req,res) => {
        const product = await db.Product.findByPk(req.params.id)
        res.render('products/product-detail.ejs', {title: 'Detalle del producto',product: product})
    },
    news:async (req, res) => {
        const products = await db.Product.findAll({
            where: {
                id_section: 4
            },
            order: [
                ['create_time', 'DESC']
            ],
        })
        res.render('products/new-products.ejs', {title: 'Nuevos Productos', products: products})
    },  
    offers: async (req, res) => {
        const products = await db.Product.findAll({
            where: {
                id_section: 3
            },
            order: [
                ['create_time', 'DESC']
            ],
        })
        res.render('products/offers-products.ejs', {title: 'Ofertas', products})
    },
    cart: (req,res) => res.render('products/cart.ejs', {title: 'Carrito'}),

    createView: (req,res) => {
        res.render('products/product-new.ejs', {title: 'Nuevo producto'})
    },
    create:async (req, res) => {
        await db.Product.create ({
            name: req.body.name,
            description: req.body.description,
            image: req.file ? req.file.filename : 'logo.png',
            id_section: req.body.id_section,
            price: req.body.price
        })
        res.redirect('/')
    },
    edit: async (req,res) => {
        const product= await db.Product.findByPk(req.params.id)
        res.render('products/product-edit.ejs', {title: 'Editar Producto', product})
    },
    update: async (req,res) => {
        let oldProduct = await db.Product.findByPk(req.params.id)
        await db.Product.update({
            name: req.body.name,
            description: req.body.description,
            image: req.file ? req.file.filename : oldProduct.image,
            id_section: req.body.id_section,
            price: parseFloat(req.body.price)
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect(`/products/detail/${req.params.id}`)
    },
    delete: async (req, res) => {
        await db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products/all')
    },
}
module.exports = productController