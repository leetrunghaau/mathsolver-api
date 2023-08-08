

const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const ImportProductValidate = require('../validations/import-product-validate')
const ImportProductController = require('../controllers/import-product-controller')
const router = express.Router();


// Define routes
router.get('/import-product-history/:productId',authorization(['admin']), ImportProductValidate.getHistoryByProductId , ImportProductController.getHistoryByProductId);
router.post('/import-product', authorization(['admin']), ImportProductValidate.createImportProduct , ImportProductController.createImportProduct);
router.put('/import-product',authorization(['admin']), ImportProductValidate.updateImportProduct , ImportProductController.updateImportProduct);



module.exports = router;