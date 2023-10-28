
const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const DiscountController = require('../controllers/discount-controller');
const router = express.Router();


// Define routes
router.get('/discount/:discountId', DiscountController.getDiscountById);
router.get('/discounts', authorization(['admin']),DiscountController.getAllDiscount);
router.post('/discount', authorization(['admin']),DiscountController.createDiscount);
router.put('/discount', authorization(['admin']),DiscountController.updateDiscountById);
router.delete('/discount/:discountId', authorization(['admin']),DiscountController.deleteDiscountById)



module.exports = router;