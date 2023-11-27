const express = require('express');
const AccountControllers = require('../controllers/account-controllers');
const {  authorization } = require('../middlewares/auth-middleware');
const AccountValidate = require('../validations/account-validate');
const router = express.Router();

router.get("/password-status", authorization(['user','admin']), AccountControllers.getPasswordStatusByUserId);
router.get("/password-status/:email",AccountValidate.getPasswordStatusByEmail, AccountControllers.getPasswordStatusByEmail);
router.put("/change-password", authorization(['user','admin']),AccountValidate.changePassword, AccountControllers.changePassword);

module.exports = router;
