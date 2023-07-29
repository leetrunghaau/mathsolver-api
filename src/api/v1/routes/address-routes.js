// addressRoutes.js

const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address-controller');
const { authorization } = require('../middlewares/auth-middleware');
const AddressValidate = require('../validations/address-validate');

// Define routes
router.get("/address", authorization(['user','admin']), AddressController.getAddressByUserId);
router.get("/addresses", authorization(['user','admin']), AddressController.getAllAddressByUserId);
router.post("/address", authorization(['user','admin']), AddressValidate.createAddress, AddressController.createAddressByUserId);
router.put("/address", authorization(['user','admin']),AddressValidate.updateAddress, AddressController.updateAddressById);
router.delete("/address/:addressId", authorization(['user','admin']), AddressValidate.deleteAddress, AddressController.deleteAddressById);


module.exports = router;
