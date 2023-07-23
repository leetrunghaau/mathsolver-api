const joi = require('joi')
const getProductImageValidate = data => {
    const productImageData = joi.object({
        productImageId: joi.string().max(20).required(),

    })
    return productImageData.validate(data);
}
const getProductImageMainByProductIdValidate = data => {
    const productImageData = joi.object({
        productId: joi.string().max(20).required(),

    })
    return productImageData.validate(data);
}

const getAllProductImageByProductIdValidate = data => {
    const productImageData = joi.object({
        productId: joi.string().max(20).required(),

    })
    return productImageData.validate(data);
}

const createProductImageValidate = data => {
    const productImageData = joi.object({
        productId: joi.string().max(20).allow(null).required(),
        name: joi.string().max(20).required(),
        main: joi.bool().required(),
        image: joi.string().max(20).required()

    })
    return productImageData.validate(data);
}

const updateProductImageByIdValidate = data => {
    const productImageData = joi.object({
        productImageId: joi.string().max(20).required(),
        productId: joi.string().max(20).required(),
        name: joi.string().max(20).required(),
        main: joi.bool().required(),
        image: joi.string().max(20).required()
    })
    return productImageData.validate(data);
}

const deleteProductImageByIdValidate = data => {
    const productImageData = joi.object({
        productImageId: joi.string().max(20).required(),

    })
    return productImageData.validate(data);
}

module.exports = {
    getProductImageValidate,
    getProductImageMainByProductIdValidate,
    getAllProductImageByProductIdValidate,
    createProductImageValidate,
    updateProductImageByIdValidate,
    deleteProductImageByIdValidate

}


