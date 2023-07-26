

const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const CartController = require('../controllers/cart-controller');
const router = express.Router();


// Define routes
router.get('/cart/:cartId', authorization(['user', 'seller']), CartController.getCart);
router.get('/cart', authorization(['user', 'seller']), CartController.getAllCart);
router.put('/cart', authorization(['user', 'seller']), CartController.updateCart);
router.delete('/cart/:cartId', authorization(['user', 'seller']), CartController.deleteCart)



module.exports = router;