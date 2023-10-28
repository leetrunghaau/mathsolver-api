// index.js
const sendMail = require('../helpers/mailer')
const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const sigRouters = require('./sig-routers')
const accountRouter = require('./account-routes')
const addressRouter = require('./address-routes')
const brandRouter = require('./brand-routes')
const categoryRouter = require('./category-routes')
const productRouter = require('./product-routes')
const blogCategoriesRouter = require('./blog-categories-router')
const blogRouter = require('./blog-router')
const discountRouter = require('./discount-routes')
const notificationRouter = require('./notification-routes')
const productDetailRouter = require('./product-detail-router')
const productImageRouter = require('./product-image-router')
const cartRouter = require('./cart-routes')
const orderRouter = require('./order-routes')
const distributorRouter = require('./distributor-routes')
const importProductRouter = require('./import-product-routes')


router.use(userRoutes);
router.use( sigRouters);
router.use( accountRouter);
router.use( addressRouter);
router.use(brandRouter);
router.use(categoryRouter);
router.use(productRouter)
router.use(blogCategoriesRouter);
router.use(blogRouter);
router.use(discountRouter);
router.use(notificationRouter);
router.use(productDetailRouter);
router.use(productImageRouter);
router.use(cartRouter);
router.use(orderRouter);
router.use(distributorRouter);
router.use(importProductRouter);

module.exports = router;
