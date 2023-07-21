const express = require('express');
const AccountControllers = require('../controllers/account-controllers');
const {  authorization } = require('../middlewares/auth-middleware');
const router = express.Router();


// Define routes


router.get("password-status", authorization(['user']), AccountControllers.getPasswordStatusByUserId);
router.put("/change-password", authorization(['user']), AccountControllers.changePassword);
router.put("/reset-password", authorization(['user']), AccountControllers.changePassword);
// system test
router.get("/accounts/:userId", AccountControllers.getAllAccountByUserId);
router.post("/account",  AccountControllers.createAccount);
router.put("/account",  AccountControllers.updateAccountById);
router.delete("/account/:accountId", AccountControllers.deleteAccountById);

module.exports = router;
