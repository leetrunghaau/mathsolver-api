// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user-controller');
const { noAuthMiddleware, authorization } = require('../middlewares/auth-middleware');

// Define routes
// router.post('/register', noAuthMiddleware, UserController.)
router.get("/user", authorization(['user','admin']), UserController.getUser);
router.put("/user", authorization(['user','admin']), UserController.updateUser);
router.get("/user/:userId", authorization(['admin']), UserController.getUserById);
router.get("/users", authorization(['admin']), UserController.getAllUser);
router.post("/user", authorization(['admin']), UserController.createUser)
router.put("/admin/user", authorization(['admin']), UserController.updateUserById);
router.delete("/user/:userId", authorization(['admin']), UserController.deleteUserById);
module.exports = router;
