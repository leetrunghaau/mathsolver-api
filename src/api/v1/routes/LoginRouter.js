const express = require('express');
const router = express.Router();
const login = require('../controllers/Login');

router.post('/email-password', login.loginEmailPassword);
module.exports = router;
