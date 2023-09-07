// productRoutes.js

const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const router = express.Router();
const ProductController = require('../controllers/product-controller');

// Define routes
router.get('/product/:productId', ProductController.getProductById);
router.get('/products', ProductController.getAllProduct);
router.post('/product', authorization(['admin']),ProductController.createProduct);
router.put('/product',authorization(['admin']), ProductController.updateProductById);
router.delete('/product/:productId',authorization(['admin']), ProductController.deleteProductById);

module.exports = router;
