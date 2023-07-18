
const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const DiscountController = require('../controllers/discount-controller');
const router = express.Router();


// Define routes
router.get('/discount/:discountId', DiscountController.getDiscountById);
router.get('/discounts', DiscountController.getAllDiscount);
router.post('/discount', DiscountController.createDiscount);
router.put('/discount', DiscountController.updateDiscountById);
router.delete('/discount/:discountId', DiscountController.deleteDiscountById)



module.exports = router;