const joi = require('joi')
const createAddressValidate = data => {
    const createAddressData = joi.object({
        phone: joi.string().length(10).required(),
        province: joi.string().min(10).max(50).required(),
        district: joi.string().min(10).max(50).required(),
        commune: joi.string().min(10).max(50).required(),
        detail: joi.string().min(10).max(50).required(),
        status: joi.string().min(2).max(10).required()

    })
    return createAddressData.validate(data)
}

module.exports = {
    createAddressValidate
}