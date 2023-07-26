const express = require('express');
const SigController = require('../controllers/sig-controllers');
const { noAuthMiddleware, verificationAuthorization, authorization } = require('../middlewares/auth-middleware');

const router = express.Router();


// Define routes
router.post("/login", noAuthMiddleware, SigController.loginEmailPassword);
router.post("/register", SigController.register);
router.post("/register-verification", verificationAuthorization(),  SigController.registerVerification);
router.get("/reset-password", authorization(['user', 'admin']),  SigController.resetPassword);
router.post("/reset-password", noAuthMiddleware,  SigController.resetPasswordByEmail);
router.post("/reset-password-verification", verificationAuthorization(),  SigController.resetPasswordVerification);
router.post("/new-password", verificationAuthorization(),  SigController.newPasswordVerification);


module.exports = router;