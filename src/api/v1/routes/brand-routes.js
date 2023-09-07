
const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const BrandController = require('../controllers/brand-controller');
const router = express.Router();


// Define routes
router.get('/brand/:brandId', BrandController.getBrandById);
router.get('/brands', BrandController.getAllBrand);
router.post('/brand', authorization(['admin']), BrandController.createBrand);
router.put('/brand', authorization(['admin']), BrandController.updateBrandById);
router.delete('/brand/:brandId', authorization(['admin']), BrandController.deleteBrandById)



module.exports = router;