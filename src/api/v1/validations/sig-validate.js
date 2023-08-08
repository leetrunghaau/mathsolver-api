const joi = require('joi');

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
const registerVerificationValidate = data => {
    const registerData = joi.object({
        verificationCode: joi.string().length(6).pattern(/^\d+$/)
    });
    return registerData.validate(data);
}
const resetPasswordByEmailValidate = data => {
    const registerData = joi.object({
        email: joi.string().email().lowercase().required()

    });
    return registerData.validate(data);
}
const resetPasswordVerificationValidate = data => {
    const registerData = joi.object({
        verificationCode: joi.string().length(6).pattern(/^\d+$/)
    });
    return registerData.validate(data);
}
const newPasswordVerificationValidate = data => {
    const registerData = joi.object({
        password: joi.string().min(4).max(32).required()

    });
    return registerData.validate(data);
}

module.exports = {
    registerValidate,
    loginEmailPasswordValidate,
    registerVerificationValidate,
    resetPasswordByEmailValidate,
    resetPasswordVerificationValidate,
    newPasswordVerificationValidate
}