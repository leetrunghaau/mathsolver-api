

const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const CartController = require('../controllers/cart-controller');
const router = express.Router();


// Define routes
router.get('/cart', authorization(['user', 'admin']), CartController.getAllCart);
router.post('/cart', authorization(['user', 'admin']), CartController.addToCart);
router.put('/cart', authorization(['user', 'admin']), CartController.updateCart);
router.delete('/cart/:cartId', authorization(['user', 'admin']), CartController.deleteCart)



module.exports = router;