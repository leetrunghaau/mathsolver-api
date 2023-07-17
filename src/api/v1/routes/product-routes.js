// productRoutes.js

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product-controller');

// Define routes
router.get('/product/:productId', ProductController.getProductById);
router.get('/products', ProductController.getAllProduct);
router.post('/product', ProductController.createProduct);
router.put('/product', ProductController.updateProductById);
router.delete('/product/:productId', ProductController.deleteProductById);

module.exports = router;
