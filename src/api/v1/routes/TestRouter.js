const express = require('express');
const router = express.Router();
const tesController = require('../controllers/TestController');

// Define routes
router.get("/:testValue", tesController.testFu);


module.exports = router;
