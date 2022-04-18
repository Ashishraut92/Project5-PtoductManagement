
const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')
const productController = require('../controller/productController')
const cartController = require('../controller/cartController')
const auth = require('../middleware/auth')

//user related
router.post('/register', userController.register)
router.post('/login', userController.useLogin)
router.get('/user/:userId/user', auth.auth, userController.getUserById)
router.put('/user/:userId/profile', auth.auth, userController.updateProfile)

//products related
// productApis..................
router.post('/products', productController.createProduct)
router.get('/products', productController.getProduct)
router.get('/products/:productId', productController.getProductById)
router.put('/products/:productId', productController.updateProductById)
router.delete('/products/:productId', productController.deleteProductById)

module.exports = router


//cart related
router.post('/users/:userId/cart', cartController.createCart)
router.get('/users/:userId/cart', cartController.getById)
router.delete('/users/:userId/cart', cartController.deleteCart)





module.exports = router
