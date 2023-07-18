const joi = require('joi')

const getDiscountValidate = data => {
    const discountData = joi.object({
        discountId: joi.string().max(20).required(),
    })
    return discountData.validate(data)
}
const createDiscountValidate = data => {
    const discountData = joi.object({
        enableAt: joi.date().required(),
        disableAt: joi.date().required(),
        type: joi.string().required(),
        value: joi.number().required(),
        quantity: joi.number().required(),
        code: joi.string().required(),
    })
    return discountData.validate(data);
}
const updateDiscountValidate = data => {
    const discountData = joi.object({
        discountId: joi.string().required(),
        enableAt: joi.date().required(),
        disableAt: joi.date().required(),
        type: joi.string().required(),
        value: joi.number().required(),
        quantity: joi.number().required(),
        code: joi.string().required(),
    })
    return discountData.validate(data);
}
const deleteDiscountValidate = data => {
    const discountData = joi.object({
        discountId: joi.string().max(20).required(),

    })
    return discountData.validate(data);
}
module.exports = {
    getDiscountValidate,
    createDiscountValidate,
    updateDiscountValidate,
    deleteDiscountValidate
}