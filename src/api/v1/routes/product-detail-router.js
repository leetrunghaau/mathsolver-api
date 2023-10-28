const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const router = express.Router();
const ProductDetailController = require('../controllers/product-detail-controller');

// Define routes
router.get('/product-detail/:productDetailId', ProductDetailController.getProductDetailById);
router.get('/product-detail-product-id/:productId', ProductDetailController.getProductDetailByProductId);
router.get('/products-detail', authorization(['admin']), ProductDetailController.getAllProductDetail);
router.post('/product-detail', authorization(['admin']), ProductDetailController.createProductDetail);
router.put('/product-detail', authorization(['admin']), ProductDetailController.updateProductDetailById);
router.delete('/product-detail/:productDetailId', authorization(['admin']), ProductDetailController.deleteProductDetailById);

module.exports = router;
