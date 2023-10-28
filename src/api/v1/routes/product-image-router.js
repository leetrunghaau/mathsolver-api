const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const router = express.Router();
const ProductImageController = require('../controllers/product-image-controller');

// Define routes
router.get('/product-image/:productImageId', ProductImageController.getProductImageById);
router.get('/product-image-main-product-id/:productId', ProductImageController.getProductImageMainByProductId);
router.get('/product-images-product-id/:productId', ProductImageController.getAllProductImageByProductId);
router.get('/product-images', authorization(['admin']), ProductImageController.getAllProductImage);
router.post('/product-image', authorization(['admin']), ProductImageController.createProductImage);
router.put('/product-image', authorization(['admin']), ProductImageController.updateProductImageById);
router.delete('/product-image/:productImageId', authorization(['admin']), ProductImageController.deleteProductImageById);

module.exports = router;
