// index.js

const express = require('express');
const addressRoutes = require('./AddressRoutes');
const brandRoutes = require('./BrandRoutes');
const categoryRoutes = require('./CategoryRoutes');
const discountRoutes = require('./DiscountRoutes');
const distributorRoutes = require('./DistributorRoutes');
const productRoutes = require('./ProductRoutes');
const userRoutes = require('./UserRoutes');
const cartRoutes = require('./CartRoutes');
const importRoutes = require('./ImportRoutes');
const orderRoutes = require('./OrderRoutes');
const billRoutes = require('./BillRoutes');
const testRouter = require('./TestRouter')
const loginRouter = require('./LoginRouter')
const accountRouter = require('./AccountRoutes')

const router = express.Router();

// Register routes
router.use('/address', addressRoutes);
router.use('/brand', brandRoutes);
router.use('/category', categoryRoutes);
router.use('/discount', discountRoutes);
router.use('/distributor', distributorRoutes);
router.use('/product', productRoutes);
router.use('/user', userRoutes);
router.use('/cart', cartRoutes);
router.use('/import', importRoutes);
router.use('/order', orderRoutes);
router.use('/bill', billRoutes);
router.use('/test',testRouter);
router.use('/login', loginRouter);
router.use('/access', accountRouter);

module.exports = router;
