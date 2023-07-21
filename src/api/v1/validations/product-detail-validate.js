const joi = require('joi')
const getProductDetailValidate = data => {
    const productDetailData = joi.object({
        productDetailId: joi.string().max(20).required(),
    })
    return productDetailData.validate(data);
}
const getProductDetailByProductValidate = data => {
    const productDetailData = joi.object({
        productId: joi.string().max(20).required(),
    })
    return productDetailData.validate(data);
}
const createProductDetailValidate = data => {
    const productDetailData = joi.object({
        specifications: joi.string().required(),
        productId: joi.string().max(20).allow(null).required(),
        description: joi.string().required(),
        content: joi.string().required(),
        location: joi.string().required(),
    })
    return productDetailData.validate(data);
}
const updateProductDetailValidate = data => {
    const productDetailData = joi.object({
        productDetailId: joi.string().max(20).required(),
        specifications: joi.string().required(),
        productId: joi.string().max(20).required(),
        description: joi.string().required(),
        content: joi.string().required(),
        location: joi.string().required(),
    })
    return productDetailData.validate(data);
}
const deleteProductDetailValidate = data => {
    const productDetailData = joi.object({
        productDetailId: joi.string().max(20).required(),
    })
    return productDetailData.validate(data);
}
module.exports = {
    getProductDetailValidate,
    getProductDetailByProductValidate,
    createProductDetailValidate,
    updateProductDetailValidate,
    deleteProductDetailValidate,
}