const joi = require('joi');
const createError = require('http-errors')

// const changePasswordValidate = data => {
//     const changePasswordData = joi.object({
//         oldPassword: joi.string().min(4).max(32).required(),
//         newPassword: joi.string().min(4).max(32).required()
//     });
//     return changePasswordData.validate(data);
// }
// const getPasswordStatusByEmailValidate = data => {
//     const passwordData = joi.object({
//         email: joi.string().email().lowercase().required(),
//     });
//     return passwordData.validate(data);
// }

// // system test



// module.exports = {

//     changePasswordValidate,
//     getPasswordStatusByEmailValidate
// }  
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