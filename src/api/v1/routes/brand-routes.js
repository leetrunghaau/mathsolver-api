
const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const BrandController = require('../controllers/brand-controller');
const router = express.Router();


// Define routes
router.get('/brand/:brandId', BrandController.getBrandById);
router.get('/brands', BrandController.getAllBrand);
router.post('/brand', BrandController.createBrand);
router.put('/brand', BrandController.updateBrandById);
router.delete('/brand/:brandId', BrandController.deleteBrandById)



module.exports = router;