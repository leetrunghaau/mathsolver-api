const joi = require('joi')

const updateUserValidate = data => {
    const userData = joi.object({
        firstName: joi.string().max(50).required(),
        lastName: joi.string().max(50).required(),
        gender: joi.string().max(7).required(),
        email: joi.string().email().lowercase().required()

    });
    return userData.validate(data);
}
const getUserByIdValidate = data => {
    const userData = joi.object({
        userId: joi.string().max(20).required()

    });
    return userData.validate(data);
}
const createUserValidate = data => {
    const userData = joi.object({
        firstName: joi.string().max(50).required(),
        lastName: joi.string().max(50).required(),
        gender: joi.string().max(7).required(),
        email: joi.string().email().lowercase().required(),
        role: joi.string().max(15).required(),

    });
    return userData.validate(data);
}
const updateUserByIdValidate = data => {
    const userData = joi.object({
        userId: joi.string().max(20).required(),
        firstName: joi.string().max(50).required(),
        lastName: joi.string().max(50).required(),
        birthDate: joi.date().required(),
        gender: joi.string().max(7).required(),
        email: joi.string().email().lowercase().required(),
        role: joi.string().max(15).allow(null).required(),

    });
    return userData.validate(data);
}
const deleteUserByIdValidate = data => {
    const userData = joi.object({
        userId: joi.string().max(20).required(),
    });
    return userData.validate(data);
}

module.exports = {
    updateUserValidate,
    getUserByIdValidate,
    createUserValidate,
    updateUserByIdValidate,
    deleteUserByIdValidate
}