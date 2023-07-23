// addressRoutes.js

const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address-controller');
const { authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/address", authorization(['user','admin']), AddressController.getAddressByUserId);
router.get("/addresses", authorization(['user','admin']), AddressController.getAllAddressByUserId);
router.post("/address", authorization(['user','admin']), AddressController.createAddressByUserId);
router.put("/address", authorization(['user','admin']), AddressController.updateAddressById);
router.delete("/address/:addressId", authorization(['user','admin']), AddressController.deleteAddressById);


module.exports = router;
