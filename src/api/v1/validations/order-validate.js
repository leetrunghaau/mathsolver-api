const joi = require('joi');
const createError = require('http-errors')

class OrderValidate {

    static checkOut(req, res, next) {
        const validationResult = joi.object({
            discountCode: joi.string().max(50).required(),
            addressId: joi.string().max(20).required()
        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };

    static getOrdersByStatus(req, res, next) {
        const validationResult = joi.object({
            status: joi.string().required()
        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    };
    static updateAddress(req, res, next) {
        const validationResult = joi.object({
            orderId: joi.string().max(20).required(),
            addressId: joi.string().max(20).required()

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };
    static cancelOrder(req, res, next) {
        const validationResult = joi.object({
            orderId: joi.string().max(20).required()
            
        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    };
    static adminGetOrdersByStatus(req, res, next) {
        const validationResult = joi.object({
            status: joi.string().required()
        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    };
    static adminUpdateStatus(req, res, next) {
        const validationResult = joi.object({
            status: joi.string().required(),
            orderId: joi.string().max(20).required()
        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };


}

module.exports = OrderValidate;
