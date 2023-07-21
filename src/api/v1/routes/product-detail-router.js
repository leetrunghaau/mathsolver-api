const express = require('express');
const router = express.Router();
const ProductDetailController = require('../controllers/product-detail-controller');

// Define routes
router.get('/product-detail/:productDetailId', ProductDetailController.getProductDetailById);
router.get('/product-detail-product-id/:productId', ProductDetailController.getProductDetailByProductId);
router.get('/products-detail', ProductDetailController.getAllProductDetail);
router.post('/product-detail', ProductDetailController.createProductDetail);
router.put('/product-detail', ProductDetailController.updateProductDetailById);
router.delete('/product-detail/:productDetailId', ProductDetailController.deleteProductDetailById);

module.exports = router;
