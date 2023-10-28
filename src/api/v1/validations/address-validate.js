const joi = require('joi')
const createError = require('http-errors')

class AddressValidate{
    static createAddress(req, res, next) {
        const validationResult = joi.object({
            phone: joi.string().length(10).required(),
        province: joi.string().max(50).required(),
        district: joi.string().max(50).required(),
        commune: joi.string().max(50).required(),
        detail: joi.string().max(50).required(),
        status: joi.string().min(2).max(10).required()

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    }
    static updateAddress(req, res, next) {
        const validationResult = joi.object({
            addressId: joi.string().max(20),
        phone: joi.string().length(10).required(),
        province: joi.string().max(50).required(),
        district: joi.string().max(50).required(),
        commune: joi.string().max(50).required(),
        detail: joi.string().max(50).required(),
        status: joi.string().min(2).max(10).required()

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    }
    static deleteAddress(req, res, next) {
        const validationResult = joi.object({
            addressId: joi.string().max(20),

        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    }
}
module.exports = AddressValidate