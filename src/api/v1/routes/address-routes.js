// addressRoutes.js

const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address-controller');
const { authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/get-one", authorization(['user']), AddressController.getAddress);
router.get("/get-list", authorization(['user']), AddressController.getListAddress);


module.exports = router;
