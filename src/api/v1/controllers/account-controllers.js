const AccountService = require("../services/account-service");
const {  changePasswordValidate } = require("../validations/account-validate");
const createError = require('http-errors')

class AccountControllers {
    
    static async changePassword(req, res, next) {
        try {
            // Kiểm tra validate
            const { error, value } = changePasswordValidate(req.body);
            if (error) {
               return next(createError.BadRequest(error.details[0].message));
            }
            //kiểm tra old password
            const results = await AccountService.checkPasswordByUserId(req.userId, value.oldPassword);
            if (results === null){
                return next(createError.InternalServerError('internal server error !'));
            }
            if(results === false){
                return next(createError[400]('sai mật khẩu cũ'));
            }
            //update password
            const accUpdated = await AccountService.updatePasswordByUserId(req.userId, value.newPassword);
            if(!accUpdated){
                return next(createError.InternalServerError('internal server error !'));
            }
            //trả kết quả
            return res.status(200).json({
                message: 'update done'
            })            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = AccountControllers;