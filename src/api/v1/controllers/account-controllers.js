const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");
const UserService = require("../services/user-service");
const { changePasswordValidate, getPasswordStatusByEmailValidate } = require("../validations/account-validate");
const createError = require('http-errors');

class AccountControllers {

    static async getPasswordStatusByUserId(req, res, next) {
        try {
            const account = await AccountService.getAccountByUserId(req.userId);
            if (!account) {
                return next(createError.NotFound('password not found'));
            }
            
            return res.status(200).json({
                status: 200,
                message: 'done',
                data:{
                    modifiedAt: account.modifiedAt
                } 
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getPasswordStatusByEmail(req, res, next) {
        try {
            const user = await UserService.getUserByEmail( req.validateData.email);
            console.log(user);

            if(!user){
                return next(createError.BadRequest('email chưa được đăng ký'));
            }
            const account = await AccountService.getAccountByUserId(user.userId);
            if (!account) {
                return next(createError.NotFound('password not found'));
            }
            
            return res.status(200).json({
                status: 200,
                message: 'done',
                data:{
                    modifiedAt: account.modifiedAt
                } 
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    static async changePassword(req, res, next) {
        try {

            const acc = await AccountService.getAccountByUserId(req.userId);
            if (!acc) {
                return next(createError.InternalServerError);
            }
            const checkValue = await comparePasswords( req.validateData.oldPassword, acc.password);
            if (!checkValue) {
                return next(createError.InternalServerError('sai mật khẩu cũ'));
            }
            const passwordEncode = await hashPassword( req.validateData.newPassword);
            const newAcc = await AccountService.updateAccountByUserId(req.userId, { password: passwordEncode });
            if (!newAcc) {
                return next(createError.InternalServerError('internal server error !'));
            }
            return res.status(200).json({
                message: 'update done'
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    

}
module.exports = AccountControllers;