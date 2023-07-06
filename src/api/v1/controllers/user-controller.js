const UserService = require("../services/user-service");
const { RegisterValidate } = require("../validations/sig-validate");
const createError = require('http-errors')

class UserController {
    static async register (req, res, next){
        //check validate
        const {error, value} = RegisterValidate(req.body);
        if (error) {
            return next(createError.BadRequest(error.details[0].message));
        }
        //check user
        if(await UserService.getUserByEmail(value.email) ){
            return next(createError.InternalServerError('mail đã tồn tại'));
        }
        //create user
        const user = await UserService.registerUser(value);
        //
        //res
        console.log('pass');
        console.log(value.password);
        return res.status(500).json({mess: "case test",value: value});
    }
}

module.exports = UserController;
