const express = require('express');
const router = express.Router();
const ProductImageController = require('../controllers/product-image-controller');

// Define routes
router.get('/product-image/:productImageId', ProductImageController.getProductImageById);
router.get('/product-image-main-product-id/:productId', ProductImageController.getProductImageMainByProductId);
router.get('/product-images-product-id/:productId', ProductImageController.getAllProductImageByProductId);
router.get('/product-images', ProductImageController.getAllProductImage);
router.post('/product-image', ProductImageController.createProductImage);
router.put('/product-image', ProductImageController.updateProductImageById);
router.delete('/product-image/:productImageId', ProductImageController.deleteProductImageById);

module.exports = router;
