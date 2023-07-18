const joi = require('joi')
const getBlogCategoryValidate = data => {
    const blogCategoryData = joi.object({
        blogCategoryId: joi.string().max(20).required()
    })
    return blogCategoryData.validate(data);
}
const createBlogCategoryValidate = data=>{
    const blogCategoryData = joi.object({
        name: joi.string().max(50).required(),
        parent: joi.string().max(20).required()
    })
    return blogCategoryData.validate(data);
}
const deleteBlogCategoryValidate = data => {
    const blogCategoryData = joi.object({
        blogCategoryId: joi.string().max(20).required()
    })
    return blogCategoryData.validate(data);
}
const updateBlogCategoryValidate = data=>{
    const blogCategoryData = joi.object({
        blogCategoryId: joi.string().max(20).required(),
        name: joi.string().max(50).required(),
        parent: joi.string().max(20).required()
    })
    return blogCategoryData.validate(data);
}
module.exports = {
    getBlogCategoryValidate,
    createBlogCategoryValidate,
    updateBlogCategoryValidate,
    deleteBlogCategoryValidate
}