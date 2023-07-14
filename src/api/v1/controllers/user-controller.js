const UserService = require("../services/user-service");
const { RegisterValidate } = require("../validations/sig-validate");
const createError = require('http-errors')

class UserController {
    static async getListUser(req, res, next){
        try{
            const users  = await UserService.getListUser();
            if(!users){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: users
            });
        }catch{

        }
    }
    static async getUser(req, res, next){
        try{
            const user = await UserService.getUserById(req.userId);
            if(!user){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: user
            })
        }catch{
            
        }
    }


}

module.exports = UserController;
