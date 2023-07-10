// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
const { noAuthMiddleware } = require('../middlewares/auth-middleware');

// Define routes
// router.post('/register', noAuthMiddleware, UserController.)
module.exports = router;
