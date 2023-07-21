const joi = require('joi');


const changePasswordValidate = data =>{
    const changePasswordData = joi.object({
        oldPassword: joi.string().min(4).max(32).required(),
        newPassword: joi.string().min(4).max(32).required()
    });
    return changePasswordData.validate(data);
}
// system test
const createAccountValidate = data =>{
    const accountData = joi.object({
        userId: joi.string().min(4).max(32).required(),
        password: joi.string().min(4).max(32).required()
    });
    return accountData.validate(data);
}
const updateAccountValidate = data =>{
    const accountData = joi.object({
        accountId: joi.string().max(20).required(),
        userId: joi.string().min(4).max(32).required(),
        password: joi.string().min(4).max(32).required()
    });
    return accountData.validate(data);
}
const getAllAccountByUserIdValidate = data =>{
    const accountData = joi.object({
        userId: joi.string().min(4).max(32).required(),
    });
    return accountData.validate(data);
}
const deleteAccountByIdValidate = data =>{
    const accountData = joi.object({
        userId: joi.string().min(4).max(32).required(),
    });
    return accountData.validate(data);
}


module.exports = {

    changePasswordValidate,
    createAccountValidate,
    updateAccountValidate,
    getAllAccountByUserIdValidate,
    deleteAccountByIdValidate
}