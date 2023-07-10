const joi = require('joi');

const loginValidate = data => {
    const loginData = joi.object({
        email: joi.string().email().lowercase().required(),
        password: joi.string().min(4).max(32).required()
    });
    return loginData.validate(data);
}
const registerValidate = data => {
    const registerData = joi.object({
        firstName: joi.string().max(20).required(),
        lastName: joi.string().max(20).required(),
        email: joi.string().email().lowercase().required(),
        password: joi.string().min(4).max(32).required()
    });
    return registerData.validate(data);
}
const loginEmailPasswordValidate = data => {
    const loginData = joi.object({
        email: joi.string().email().lowercase().required(),
        password: joi.string().min(4).max(32).required()
    });
    return loginData.validate(data);
}
module.exports = {
    loginValidate,
    registerValidate,
    loginEmailPasswordValidate
}