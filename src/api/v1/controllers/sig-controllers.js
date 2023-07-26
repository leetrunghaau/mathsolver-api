const { date } = require("joi");
const { generateId, accessTokenSecret, generateCode } = require("../helpers/generate-key");
const { generateAccessToken, generateVerificationToken } = require("../helpers/jwt");
const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");
const UserService = require("../services/user-service");
const { loginEmailPasswordValidate, registerValidate, registerVerificationValidate } = require("../validations/sig-validate");
const createError = require('http-errors')

class Sig {
    static async loginEmailPassword(req, res, next) {
        try {
            const { error, value } = loginEmailPasswordValidate(req.body);
            if (error) {
                next(createError.BadRequest(error.details[0].message));
            }
            const userData = await UserService.getUserByEmail(value.email);
            if (!userData) {
                return next(createError.NotFound('user not found'));
            }
            const accountData = await AccountService.getAccountByUserId(userData.userId);
            if (!accountData) {
                return next(createError.InternalServerError('account not found'));
            }
            const checkValue = await comparePasswords(value.password, accountData.password);
            if (checkValue == false) {
                return next(createError.BadRequest('password not mach'));
            }
            const token = await generateAccessToken(userData.userId);
            return res.status(200).json({
                status: 200,
                message: 'login done',
                data: {
                    role: userData.role,
                    token: ' ' + token
                }
            });

        } catch (error) {
            console.log(error)
        }
    };
    static async register(req, res, next) {
        //check validate
        const { error, value } = registerValidate(req.body);
        if (error) {
            return next(createError.BadRequest(error.details[0].message));
        }
        const userData = await UserService.getUserByEmail(value.email);
        if (userData) {
            if (userData.verified) {
                //tài khoản đã tồn tại
                return next(createError.InternalServerError('đã có tải khoảng'));
            } else {
                //tài khoản tồn tại nhưng chưa xác thực mail nên chưa có tài khoản (cụ thể mất link hoặc hết thòi gian token)
                //update user
                const user = await UserService.getUserByEmail(value.email);
                if (!user) {
                    return next(createError.InternalServerError());
                }
                user.firstName = value.firstName;
                user.lastName = value.lastName;
                user.gender = value.gender;
                user.verified = new Date();
                const { userId, ...updateData } = user
                const newUser = await UserService.updateUserById(userId, updateData);
                console.log(user);
                console.log(newUser);
                if (!newUser) {
                    return next(createError.InternalServerError());
                }
                const newAccount = await AccountService.updateAccountByUserId(newUser.userId, { password: await hashPassword(value.password) })
                if (!newAccount) {
                    return next(createError.InternalServerError());
                }
                const verificationCode = generateCode();
                console.log("verificationCode:  ");
                console.log(verificationCode);
                const token = await generateVerificationToken(newUser.userId, await hashPassword(verificationCode));
                return res.status(200).json({
                    status: 200,
                    message: "done",
                    data: {
                        token: token
                    }
                });
            }
        } else {
            //create user
            value.role = 'user';
            const user = await UserService.createUser(value);
            if (!user) {
                return next(createError.InternalServerError());
            }
            const accountData = {
                userId: user.userId,
                password: await hashPassword(value.password),
            }
            const account = await AccountService.createAccount(accountData);
            if (!account) {
                return next(createError.InternalServerError());
            }
            const verificationCode = generateCode();
            console.log("verificationCode:  ");
            console.log(verificationCode);
            const token = await generateVerificationToken(user.userId, await hashPassword(verificationCode));
            return res.status(200).json({
                status: 200,
                message: "done",
                data: {
                    token: token
                }
            });
        }

    }
    static async registerVerification(req, res, next) {
        try {
            const { error, value } = registerVerificationValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const checkValue = await comparePasswords(value.verificationCode, req.verificationCode);
            if (!checkValue) {
                return next(createError.BadRequest('sai mã code vui lòng nhập lại'))
            }
            const userData = {
                verified: new Date()
            }
            const user = await UserService.updateUserById(req.userId, userData);
            if (!user) {
                return next(createError.InternalServerError());
            }
            const token = await generateAccessToken(req.userId);
            return res.status(200).json({
                status: 200,
                message: 'done',
                data:token
            })

        } catch {

        }

    }
    static async resetPassword(req, res, next) {
        try {
            const verificationCode = generateCode();
            console.log("verificationCode:  ");
            console.log(verificationCode);
            const token = await generateVerificationToken(req.userId, await hashPassword(verificationCode));
            return res.status(200).json({
                status: 200,
                message: "done",
                data: {
                    token: token
                }
            });
        } catch {

        }
    }
    static async resetPasswordByEmail(req, res, next) {
        try {
            const { error, value } = resetPasswordByEmailValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const user = await UserService.getUserByEmail(value.email);
            if (!user) {
                return next(createError.BadRequest("email not found"));
            }
            const verificationCode = generateCode();
            console.log("verificationCode:  ");
            console.log(verificationCode);
            const token = await generateVerificationToken(user.userId, await hashPassword(verificationCode));
            return res.status(200).json({
                status: 200,
                message: "done",
                data: {
                    token: token
                }
            });
        } catch {

        }
    }
    static async resetPasswordVerification(req, res, next) {
        try {
            const { error, value } = resetPasswordVerificationValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const checkValue = await comparePasswords(value.verificationCode, req.verificationCode);
            if (!checkValue) {
                return next(createError.BadRequest('sai mã code vui lòng nhập lại'))
            }
            const verificationCode = generateCode();
            console.log("verificationCode:  ");
            console.log(verificationCode);
            const token = await generateVerificationToken(req.userId, await hashPassword("newPassword"));
            return res.status(200).json({
                status: 200,
                message: 'done'
            })

        } catch {

        }

    }
    static async newPasswordVerification(req, res, next) {
        try {
            const { error, value } = newPasswordVerificationValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const checkValue = await comparePasswords('newPassword', req.verificationCode);
            if (!checkValue) {
                return next(createError.BadRequest('giả mạo token'))
            }
            const user = await UserService.getUserById(req.userId);
            if (!user) {
                return next(createError.InternalServerError());
            }
            const accountData = {
                password: await hashPassword(value.password)
            }
            const account = await AccountService.updateAccountByUserId(user.userId, accountData);
            if(!account){
                return next(createError.InternalServerError());
            }
            const token = await generateAccessToken(user.userId);
            return res.status(200).json({
                status: 200,
                message: 'done',
                data:{
                    role: user.role,
                    token:token
                }
            })

        } catch {

        }

    }


}
module.exports = Sig;