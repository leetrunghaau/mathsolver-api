const express = require('express');
const AccountControllers = require('../controllers/account-controllers');
const {  authorization } = require('../middlewares/auth-middleware');
const router = express.Router();


// Define routes

router.post("/change-password", authorization(['user']), AccountControllers.changePassword);


module.exports = router;
