// addressRoutes.js

const express = require('express');
const router = express.Router();
const AddressController = require('../controllers/address-controller');
const { authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/get-one", authorization(['user']), AddressController.getAddressByUserId);
router.get("/get-list", authorization(['user']), AddressController.getAllAddressByUserId);


module.exports = router;
