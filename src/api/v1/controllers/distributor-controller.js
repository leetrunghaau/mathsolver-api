
const DistributorService = require("../services/distributor-service");
const createError = require('http-errors')

class DistributorController {
    static async getDistributorById(req, res, next) {
        try {
            
            const distributor = await DistributorService.getDistributorById(req.validateData.distributorId);
            if (!distributor) {
                return next(createError.NotFound('Distributor not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: distributor
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllDistributor(req, res, next) {
        try {
            const distributors = await DistributorService.getAllDistributor();
            if (!distributors) {
                return next(createError.NotFound('distributors not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: distributors
            })

        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createDistributor(req, res, next) {
        try {
    
            const distributor = await DistributorService.createDistributor(req.validateData);
            if (!distributor) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: distributor
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateDistributor(req, res, next) {
        try {

            const { distributorId, ...distributorData } = req.validateData;
            const distributor = await DistributorService.updateDistributorById(distributorId, distributorData);
            if (!distributor) {
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: distributor
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }


    }
    static async deleteDistributorById(req, res, next) {
        try {
            const distributor = await DistributorService.deleteDistributorById(req.validateData.distributorId);
            if (!distributor) {
                return next(createError.NotFound())
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = DistributorController;