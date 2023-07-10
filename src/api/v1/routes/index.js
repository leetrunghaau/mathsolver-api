// index.js

const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const sigRouters= require('./sig-routers')
const accountRouter = require('./account-routes')
const addressRouter = require('./address-routes')


router.use('/user', userRoutes);
router.use('/sig', sigRouters);
router.use('/account', accountRouter);
router.use('/address', addressRouter)


module.exports = router;
