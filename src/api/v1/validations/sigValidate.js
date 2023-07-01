const joi = require('joi');

const LoginValidate = data =>{
    const loginData = joi.object({
        email: joi.string().email().lowercase().required(),
        password: joi.string().min(4).max(32).required()
    });
    return loginData.validate(data);
}

module.exports = {
    LoginValidate
}