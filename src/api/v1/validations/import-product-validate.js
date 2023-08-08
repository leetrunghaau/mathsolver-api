const joi = require('joi');
const createError = require('http-errors')

class ImportProductValidate {

    static getHistoryByProductId(req, res, next) {
        const validationResult = joi.object({
            importProductId: joi.string().max(20).required(),
        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    };

    static createImportProduct(req, res, next) {
        const validationResult = joi.object({
            productId: joi.string().max(20).required(),
            distributorId: joi.string().required(),
            quantity: joi.number().min(0).required(),
            description: joi.string().required(),
        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };
    static updateImportProduct(req, res, next) {
        const validationResult = joi.object({
            importProductId: joi.string().max(20).required(),
            productId: joi.string().max(20).required(),
            distributorId: joi.string().required(),
            quantity: joi.number().min(0).required(),
            description: joi.string().required(),

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    };

}

module.exports = ImportProductValidate;
