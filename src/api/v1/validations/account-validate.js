const joi = require('joi');
const createError = require('http-errors')

class AccountValidate {
    static changePassword(req, res, next) {
        const validationResult = joi.object({
            oldPassword: joi.string().min(4).max(32).required(),
            newPassword: joi.string().min(4).max(32).required()

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    }
    static getPasswordStatusByEmail(req, res, next) {
        const validationResult = joi.object({
            email: joi.string().email().lowercase().required(),

        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    }
}
module.exports = AccountValidate;