const joi = require('joi')
const addToCartValidate = data =>{
    const cartData = joi.object({
        productId: joi.string().length(18).required(18)
    })
    return cartData.validate(data);

}
const editCartValidate = data =>{
    const cartData = joi.object({
        productId: joi.string().length(18).required(),
        quantity: joi.number().min(1).required()
    })
    return cartData.validate(data);
}

const deleteCartValidate = data =>{
    const cartData = joi.object({
        productId: joi.string().length(18).required(18)
    })
    return cartData.validate(data);

}
module.exports = {
    addToCartValidate,
    editCartValidate,
    deleteCartValidate
}