// index.js

const express = require('express');

const userRoutes = require('./user-routes');


const router = express.Router();

// Register routes

router.use('/user', userRoutes);



module.exports = router;
