const joi = require('joi');


const changePasswordValidate = data =>{
    const changePasswordData = joi.object({
        oldPassword: joi.string().min(4).max(32).required(),
        newPassword: joi.string().min(4).max(32).required()
    });
    return changePasswordData.validate(data);
}
const getPasswordStatusByEmailValidate = data =>{
    const passwordData = joi.object({
        email: joi.string().email().lowercase().required(),
    });
    return passwordData.validate(data);
}

// system test



module.exports = {

    changePasswordValidate,
    getPasswordStatusByEmailValidate
}