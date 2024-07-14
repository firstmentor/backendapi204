const { ChangeUserAuth, AuthRoles } = require('../middleware/Auth')

const express = require('express')
const UserController = require('../controllers/UserController')
const ProductController = require('../controllers/ProductController')
const OrderController = require('../controllers/OrderController')
const CategoryController = require('../controllers/CategoryController')
const PaymentController = require('../controllers/PaymentController')
const router = express.Router()


//UserController API Route
router.post('/register', UserController.registerUser)
router.post('/userLogin', UserController.loginUser)
router.post('/updatePassword', ChangeUserAuth, UserController.updatePassword)
router.get('/logout', UserController.logout)
router.get('/me', ChangeUserAuth, UserController.getUserDetail)

//AdminOnly
router.get('/admin/users', UserController.getAllUser)
router.get('/admin/getUser/:id', UserController.getSingleUser)
router.delete('/admin/deleteUser/:id', UserController.deleteUser)
router.put('/admin/updateUserRole/:id', UserController.updateUserRole)
router.post('/updateProfile', ChangeUserAuth, UserController.updateProfile)






//ProductController
router.post('/product/create', ProductController.createProduct)
router.get('/products', ProductController.getAllProducts)
router.get('/getProductDetail/:id', ProductController.getProductDetail)
router.get('/product/getAdminProduct', ProductController.getAdminProduct)
router.post('/product/updateProduct', ProductController.updateProduct)
router.get('/product/deleteProduct/:id', ProductController.deleteProduct)

//OrderController
router.post('/order/create',ChangeUserAuth, OrderController.newOrder)
router.get('/order/getSingleOrder/:id',ChangeUserAuth, OrderController.getSingleOrder)
router.get('/order/myOrder',ChangeUserAuth, OrderController.myOrder)
router.get('/order/getAllOrders',ChangeUserAuth, OrderController.getAllOrders)
router.get('/order/deleteOrder/:id', ChangeUserAuth,OrderController.deleteOrder)


//CategoryController
router.post('/category/create', CategoryController.createCategory)
router.get('/categories', CategoryController.getAllCategories)
router.get('/getCategoriesDetail/:id', CategoryController.getCategoryDetail)


//payment
router.post('/payment/process', PaymentController.processPayment)
router.get('/stripeapiKey', PaymentController.sendStripeApiKey)


const a ={  //object
    name:"ram",
    city:"gwalior"
}


const b ={   //JSON sting
    "name":"ram",
    "city":"gwalior"
}









module.exports = router