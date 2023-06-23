// addressRoutes.js

const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// Define routes
router.get("/:addressId", addressController.getAddress);


module.exports = router;
