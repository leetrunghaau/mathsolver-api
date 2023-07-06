const { sigAccessToken } = require("../helpers/jwt");
const AccountService = require("../services/account-service");
const UserService = require("../services/user-service");
const { loginEmailPasswordValidate } = require("../validations/access-validate");
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
            //get user by login data
            const userData =  await UserService.getUserByEmail(value.email);
            if(!userData){
               return next(createError.NotFound('user not found'));
            }
            console.log('user:   ' + userData)
            // get account
            const accountData = await AccountService.getAccountByUserId(userData.userId);
            if(!accountData){
                console.log(accountData);
                return next(createError.BadRequest('account not found'));
            }
            
            if(accountData.password != value.password){
                return next(createError.BadRequest('password not mach'));
            }
            const token = sigAccessToken(userData.userId, accountData.role);
            return res.status(200).json({
                userId: userData.userId,
                role: accountData.role,
                token: token
            })
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = AccountControllers;