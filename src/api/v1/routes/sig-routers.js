const express = require('express');
const SigController = require('../controllers/sig-controllers');
const { noAuthMiddleware } = require('../middlewares/auth-middleware');

const router = express.Router();


// Define routes
router.post("/login", noAuthMiddleware, SigController.loginEmailPassword);
router.post("/register", SigController.register);
router.post("/register-verifies", SigController.register);


module.exports = router;