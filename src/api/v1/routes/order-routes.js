

const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const OrderController = require('../controllers/order-controller');
const OrderValidate = require('../validations/order-validate');
const router = express.Router();


// Define routes
router.post('/order/checkout',authorization(['user']), OrderValidate.checkOut , OrderController.checkOut);
router.get('/orders',authorization(['user']),  OrderController.getAllOrderByUserId);
router.get('/orders/:status', authorization(['user']), OrderValidate.getOrdersByStatus , OrderController.getAllMyOrderByStatus);
router.put('/order',authorization(['user']), OrderValidate.updateAddress , OrderController.updateAddressInOrder);
router.delete('/order/:orderId',authorization(['user']), OrderValidate.cancelOrder , OrderController.cancelOrder);
router.get('/admin/orders',authorization(['admin']) , OrderController.adminGetAllOrder);
router.get('/admin/orders/:status',authorization(['admin']), OrderValidate.adminGetOrdersByStatus , OrderController.adminGetAllOrderByStatus);
router.put('/admin/order',authorization(['admin']), OrderValidate.adminUpdateStatus , OrderController.adminUpdateStatusInOrder);



module.exports = router;