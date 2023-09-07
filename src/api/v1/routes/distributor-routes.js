

const express = require('express');
const {  authorization } = require('../middlewares/auth-middleware');
const DistributorValidate = require('../validations/distributor-validate')
const DistributorController = require('../controllers/distributor-controller')
const router = express.Router();


// Define routes
router.get('/distributor/:distributorId',authorization(['admin']), DistributorValidate.getDistributorById , DistributorController.getDistributorById);
router.get('/distributors',authorization(['admin']),  DistributorController.getAllDistributor);
router.post('/distributor', authorization(['admin']), DistributorValidate.createDistributor , DistributorController.createDistributor);
router.put('/distributor',authorization(['admin']), DistributorValidate.updateDistributor , DistributorController.updateDistributor);
router.delete('/distributor/:distributorId',authorization(['admin']), DistributorValidate.deleteDistributorById , DistributorController.deleteDistributorById);



module.exports = router;