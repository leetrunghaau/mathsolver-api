const express = require('express');
const AccountControllers = require('../controllers/account-controllers');
const {  authorization } = require('../middlewares/auth-middleware');
const router = express.Router();


// Define routes


router.get("/password-status", authorization(['user','admin']), AccountControllers.getPasswordStatusByUserId);
router.get("/password-status/:email", AccountControllers.getPasswordStatusByEmail);
router.put("/change-password", authorization(['user','admin']), AccountControllers.changePassword);

module.exports = router;
