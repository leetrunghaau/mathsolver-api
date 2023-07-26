const joi = require('joi')
const addToCartValidate = data =>{
    const cartData = joi.object({
        productId: joi.string().length(18).required(18)
    })
    return cartData.validate(data);

}
const updateCartValidate = data =>{
    const cartData = joi.object({
        productId: joi.string().max(20).required(),
        quantity: joi.number().min(0).required()
    })
    return cartData.validate(data);
}
const getCartValidate = data =>{
    const cartData = joi.object({
        productId: joi.string().max(20).required(),
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
    updateCartValidate,
    deleteCartValidate,
    getCartValidate
}