// addressRoutes.js

const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address-controller');

// Define routes
router.get("/:addressId", AddressController.getAddress);


module.exports = router;
