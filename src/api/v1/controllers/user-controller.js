const UserService = require("../services/user-service");
const createError = require('http-errors');
const { updateUserValidate, getUserByIdValidate, createUserValidate, updateUserByIdValidate, deleteUserByIdValidate } = require("../validations/user-validate");
const { hashPassword } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");

class UserController {
    // user role
    static async getUser(req, res, next) {
        try {
            const user = await UserService.getUserById(req.userId);
            if (!user) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: user
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateUser(req, res, next) {
        try {
            const { error, value } = updateUserValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const checkEmail = await UserService.getUserByEmail(value.email);
            if (checkEmail) {
                return next(createError.NotFound('email đã tồn tại '));
            }
            const user = await UserService.updateUserById(req.userId, value);
            if (!user) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: user
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }

    // admin role
    static async getUserById(req, res, next) {
        try {
            const { error, value } = getUserByIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const user = await UserService.getUserById(value.userId);
            if (!user) {
                return next(createError.NotFound('user not fount'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: user
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllUser(req, res, next) {
        try {
            const users = await UserService.getAllUser();
            if (!users) {
                return next(createError.NotFound());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: users
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createUser(req, res, next) {
        try {
            const { error, value } = createUserValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const user = await UserService.getUserByEmail(value.email);
            if (user) {
                return next(createError.BadRequest('email đã tồn tại'));
            }
            const newUser = await UserService.createUser(value);
            if (!newUser) {
                return next(createError.InternalServerError());
            }
            const accountData = {
                userId: newUser.userId,
                password: await hashPassword(value.email)
            }
            const account = await AccountService.createAccount(accountData);
            if (!account) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: newUser
            });
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateUserById(req, res, next) {
        try {
            const { error, value } = updateUserByIdValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const user = await UserService.getUserById(value.userId);
            if (!user) {
                return next(createError.NotFound('user id not match'));

            }
            const checkEmail = await UserService.getUserByEmail(value.email);
            if (checkEmail) {
                return next(createError.NotFound('email đã tồn tại '));
            }
            const { userId, ...updateData } = value;
            const userUpdate = await UserService.updateUserById(userId, updateData);
            if (!userUpdate) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: userUpdate
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    // system role
    static async deleteUserById(req, res, next) {
        try {
            const { error, value } = deleteUserByIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const account = await AccountService.deleteAccountByUserId(value.userId)
            const user = await UserService.deleteUserById(value.userId);
            if (!user) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}

module.exports = UserController;
