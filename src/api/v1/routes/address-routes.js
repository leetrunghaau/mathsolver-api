// addressRoutes.js

const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address-controller');
const { authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/address", authorization(['user']), AddressController.getAddressByUserId);
router.get("/addresses", authorization(['user']), AddressController.getAllAddressByUserId);
router.post("/address", authorization(['user']), AddressController.getAllAddressByUserId);
router.put("/address", authorization(['user']), AddressController.getAllAddressByUserId);
router.delete("/address/:addressId", authorization(['user']), AddressController.getAllAddressByUserId);


module.exports = router;
