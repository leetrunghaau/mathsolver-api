

const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const CartController = require('../controllers/cart-controller');
const router = express.Router();


// Define routes
router.get('/cart', authorization(['user']), CartController.getAllCart);
router.post('/cart', authorization(['user']), CartController.addToCart);
router.put('/cart', authorization(['user']), CartController.updateCart);
router.delete('/cart/:cartId', authorization(['user']), CartController.deleteCart)



module.exports = router;