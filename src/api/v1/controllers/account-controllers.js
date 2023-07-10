const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
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
            const acc = await AccountService.getAccountByUserId(req.userId);
            if(!acc){
                return next(createError.InternalServerError);
            }
            const checkValue = await comparePasswords(value.oldPassword, acc.password);
            if(!checkValue){
                return next(createError.InternalServerError('sai mật khẩu cũ'));
            }
            
            //update password

            const passwordEncode = await hashPassword(value.newPassword)
            const newAcc = await AccountService.updateAccountByUserId(req.userId, {password: passwordEncode});
            if(!newAcc){
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