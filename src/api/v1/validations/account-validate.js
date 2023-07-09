const joi = require('joi');


const changePasswordValidate = data =>{
    const changePasswordData = joi.object({
        oldPassword: joi.string().min(4).max(32).required(),
        newPassword: joi.string().min(4).max(32).required()
    });
    return changePasswordData.validate(data);
}
module.exports = {
    loginEmailPasswordValidate,
    changePasswordValidate
}