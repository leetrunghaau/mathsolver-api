const joi = require('joi');

const LoginValidate = data =>{
    const loginData = joi.object({
        email: joi.string().email().lowercase().required(),
        password: joi.string().min(4).max(32).required()
    });
    return loginData.validate(data);
}
const RegisterValidate = data =>{
    const registerData = joi.object({
        firstName: joi.string().max(20).required(),
        lastName: joi.string().max(20).required(),
        email: joi.string().email().lowercase().required()
    });
    return registerData.validate(data);
}
module.exports = {
    LoginValidate,
    RegisterValidate
}