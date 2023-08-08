const joi = require('joi');
const createError = require('http-errors')

class DistributorValidate {

    static getDistributorById(req, res, next) {
        const validationResult = joi.object({
            distributorId: joi.string().max(20).required()
        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };

    static createDistributor(req, res, next) {
        const validationResult = joi.object({
            name: joi.string().max(50).required(),
            address: joi.string().required(),
            phone: joi.string().max(12).required(),
        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };
    static updateDistributor(req, res, next) {
        const validationResult = joi.object({
            distributorId: joi.string().max(20).required(),
            name: joi.string().max(50).required(),
            address: joi.string().required(),
            phone: joi.string().max(12).required(),

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };
    static deleteDistributorById(req, res, next) {
        const validationResult = joi.object({
            distributorId: joi.string().max(20).required()

        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    };



}

module.exports = DistributorValidate;
