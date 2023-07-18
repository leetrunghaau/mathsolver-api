// index.js

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


router.use('/user', userRoutes);
router.use('/sig', sigRouters);
router.use('/account', accountRouter);
router.use('/address', addressRouter);
router.use(brandRouter);
router.use(categoryRouter);
router.use(productRouter)
router.use(blogCategoriesRouter);
router.use(blogRouter);
router.use(discountRouter);
router.use(notificationRouter);

router.get("/test-value/:myvalue", (req, res, next) => {
    console.log(req);
    console.log(req.myvalue);
    console.log(req.body);
    console.log(req.params);
    console.log('jjjjjjjjjjjjjjj')
})


module.exports = router;
