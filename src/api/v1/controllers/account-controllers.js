const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");
const { changePasswordValidate, getAllAccountByUserIdValidate, updateAccountValidate, createAccountValidate, deleteAccountByIdValidate } = require("../validations/account-validate");
const createError = require('http-errors');

class AccountControllers {

    static async getPasswordStatusByUserId(req, res, next) {
        try {

            const account = await AccountService.getPasswordStatus(req.userId);
            if (!account) {
                return next(createError.NotFound('password not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: account
            })
        } catch {

        }
    }
    static async resetPassword(req, res, next) {
        try {

        } catch {

        }

    }
    static async changePassword(req, res, next) {
        try {
            const { error, value } = changePasswordValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const acc = await AccountService.getAccountByUserId(req.userId);
            if (!acc) {
                return next(createError.InternalServerError);
            }
            const checkValue = await comparePasswords(value.oldPassword, acc.password);
            if (!checkValue) {
                return next(createError.InternalServerError('sai mật khẩu cũ'));
            }
            const passwordEncode = await hashPassword(value.newPassword);
            const newAcc = await AccountService.updateAccountByUserId(req.userId, { password: passwordEncode });
            if (!newAcc) {
                return next(createError.InternalServerError('internal server error !'));
            }
            return res.status(200).json({
                message: 'update done'
            })
        } catch (error) {
            console.log(error)
        }
    }

    // sys tesst
    static async getAllAccountByUserId(req, res, next) {
        try {
            const { error, value } = getAllAccountByUserIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const accounts = await AccountService.getAllAccountByUserId(value.userId);
            if (!accounts) {
                return next(createError.NotFound('acc not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: accounts
            })
        } catch {

        }
    }
    static async createAccount(req, res, next) {
        try {
            const { error, value } = createAccountValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const passwordEncode = await hashPassword(value.password);
            value.password = passwordEncode;
            const account = await AccountService.createAccount(value);
            if (!account) {
                return next(createError.InternalServerError('system error'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: account
            })
        } catch {

        }
    }
    static async updateAccountById(req, res, next) {
        try {
            const { error, value } = updateAccountValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const passwordEncode = await hashPassword(value.password);
            value.password = passwordEncode;
            const account = await AccountService.updateAccountByUserId(value.userId, value);
            if (!account) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: account
            })
        } catch {

        }
    }
    static async deleteAccountById(req, res, next) {
        try {
            const { error, value } = deleteAccountByIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const account = await AccountService.getAllAccountByUserId(value.userId);
            if (!account) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: account
            })
        } catch {

        }
    }

}
module.exports = AccountControllers;