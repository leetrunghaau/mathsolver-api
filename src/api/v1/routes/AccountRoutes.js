const express = require('express');
const AccountControllers = require('../controllers/AccountControllers');
const { noAuthMiddleware } = require('../middlewares/AuthMiddleware');
const router = express.Router();


// Define routes
router.post("/login", noAuthMiddleware, AccountControllers.loginEmailPassword);


module.exports = router;
