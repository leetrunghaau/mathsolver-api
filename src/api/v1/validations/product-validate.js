const joi = require('joi');
const getLimitValidate = data =>{
    const getallData = joi.object({
        index: joi.string
    });
    return getallData.validate(data);
}
const getProductValidate = data =>{
    const productData = joi.object({
        productId: joi.string().max(20).required(),
    })
    return productData.validate(data);
}
const createProductValidate = data =>{
    const productData = joi.object({
        name: joi.string().required(),
        categoryId: joi.string().max(20).allow(null).required(),
        brandId: joi.string().max(20).allow(null).required(),
        information: joi.string().required(),
        price: joi.number().required(),
        status: joi.string().max(20).required()

    })
    return productData.validate(data);

}
const updateProductValidate = data =>{
    const productData = joi.object({
        productId: joi.string().max(20).required(),
        name: joi.string().required(),
        categoryId: joi.string().max(20).allow(null).required(),
        brandId: joi.string().max(20).allow(null).required(),
        information: joi.string().required(),
        price: joi.number().required(),
        status: joi.string().max(20).required(),

    })
    return productData.validate(data);

}
const deleteProductValidate = data =>{
    const productData = joi.object({
        productId: joi.string().max(20).required(),
    })
    return productData.validate(data);

}



module.exports = {
    getLimitValidate,
    getProductValidate,
    createProductValidate,
    updateProductValidate,
    deleteProductValidate
}