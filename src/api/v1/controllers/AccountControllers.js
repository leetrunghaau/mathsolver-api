const LoginRequestDTO = require("../dtos/account/LoginRequestDTO");
const { sigAccessToken } = require("../helpers/jwtHelper");
const AccountService = require("../services/AccountServive");
const UserService = require("../services/UserServive");
const { loginEmailPasswordValidate } = require("../validations/AccessValidate");
const createError = require('http-errors')

class AccountControllers {
    static async loginEmailPassword(req, res, next) {
        try {
            //validate handle
            const { error ,value } = loginEmailPasswordValidate(req.body);
            console.log(' validate '+value);
            if (error) {
                next(createError.BadRequest(error.details[0].message));
            }
            //get login data
            const loginData = new LoginRequestDTO(req.body.email, req.body.password);
            //get user by login data
            const userData =  await UserService.getUserByEmail(loginData.email);
            if(!userData){
               return next(createError.BadRequest('user not found'));
            }
            console.log('user:   ' + userData)
            // get account
            const accessData = await AccountService.getAccountByUserId(userData.userId);
            if(!accessData){
                console.log(accessData);
                return next(createError.BadRequest('account not found'));
            }
            
            if(accessData.password != loginData.password){
                return next(createError.BadRequest('password not mach'));
            }
            const token = sigAccessToken(userData.userId, accessData.role);
            return res.status(200).json({
                userId: userData.userId,
                role: accessData.role,
                token: token
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = AccountControllers;