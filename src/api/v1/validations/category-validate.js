const joi = require('joi')
const getCategoryValidate = data =>{
    const categoryData = joi.object({
        categoryId: joi.string().length(18).required(),
    })
    return categoryData.validate(data);
}
const createCategoryValidate = data =>{
    const categoryData = joi.object({
        name: joi.string().required(),
        parent: joi.string().required(),
        enable: joi.boolean().required(),
        image: joi.string().required()

    })
    return categoryData.validate(data);
}
const updateCategoryValidate =  data =>{
    const categoryData = joi.object({
        categoryId: joi.string().required(),
        name: joi.string().required(),
        parent: joi.string().required(),
        enable: joi.boolean().required(),
        image: joi.string().required()
    })
    return categoryData.validate(data);
}
const deleteCategoryValidate = data =>{
    const categoryData = joi.object({
        categoryId: joi.string().required()
    })
    return categoryData.validate(data);
}
module.exports = {
    getCategoryValidate,
    createCategoryValidate,
    updateCategoryValidate,
    deleteCategoryValidate
}