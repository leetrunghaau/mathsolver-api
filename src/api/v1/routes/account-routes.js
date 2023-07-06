const express = require('express');
const AccountControllers = require('../controllers/account-controllers');
const { noAuthMiddleware } = require('../middlewares/auth-middleware');
const router = express.Router();


// Define routes
router.post("/login", noAuthMiddleware, AccountControllers.loginEmailPassword);


module.exports = router;
