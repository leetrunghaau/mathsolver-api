const { generateId, accessTokenSecret } = require("../helpers/generate-key");
const { sigAccessToken, sigAuthToken } = require("../helpers/jwt");
const { hashPassword, comparePasswords } = require("../helpers/password-crypt");
const AccountService = require("../services/account-service");
const UserService = require("../services/user-service");
const { loginEmailPasswordValidate, registerValidate } = require("../validations/sig-validate");
const createError = require('http-errors')

class Sig {
    static async loginEmailPassword(req, res, next) {
        try {
            //validate handle
            const { error, value } = loginEmailPasswordValidate(req.body);
            // console.log(' validate ' + value);
            if (error) {
                next(createError.BadRequest(error.details[0].message));
            }
            //get user by login data
            const userData = await UserService.getUserByEmail(value.email);
            if (!userData) {
                return next(createError.NotFound('user not found'));
            }
            // get account
            const accountData = await AccountService.getAccountByUserId(userData.userId);
            if (!accountData) {
                return next(createError.BadRequest('account not found'));
            }
            const checkValue = await comparePasswords(value.password, accountData.password);
            if (checkValue == false) {
                return next(createError.BadRequest('password not mach'));
            }
            const token = await sigAccessToken(userData.userId, accountData.role);
            return res.status(200).json({
                status: 200,
                message: 'login done',
                data: {
                    role: accountData.role,
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

        const userData = await UserService.getUserByEmail(value.email)

        if (userData) {
            return next(createError.InternalServerError('đã có tải khoảng'));
            if (userData.verified) {
                // email đã tồn tại
                return next(createError.InternalServerError('đã có tải khoảng'));
            } else {
                //để sau
                //email đã đồ tại nhưng chhwua xác thực 
                // khống cho sửa gì hết gửi token để đi xác thực
                // sinh ra token
                // trả dử liệu
            }
        }

        //create user
        const passwordEncode = await hashPassword(value.password);
        delete value.password;

        const user = await UserService.createUser(value);
        console.log(user);
        if (!user) {
            return next(createError.InternalServerError("test"));
        }
        console.log(user);
        //create account
        const accountData = {
            userId: user.userId,
            password: passwordEncode,
            role: 'user'
        }
        const account = await AccountService.createAccount(accountData);
        if (!account) {
            return next(createError.InternalServerError("test1"));
        }
        // sinh ra token
        const token = await sigAuthToken(user.useId)
        //res
        return res.status(200).json({
            status: 200,
            message: "done",
            data: {
                token: token
            }
        });
    }
}
module.exports = Sig;