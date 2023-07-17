const joi = require('joi')
const getBlogValidate = data => {
    const blogData = joi.object({
        blogId: joi.string().max(20).required()
    })
    return blogData.validate(data);
}
const createBlogValidate = data => {
    const blogData = joi.object({
        blogCategoryId: joi.string().max(20).required(),
        title: joi.string().max(20).required(),
        thumbnail: joi.string().max(20).required(),
        introduction: joi.string().max(20).required(),
        content: joi.string().max(20).required(),
    })
    return blogData.validate(data);
}
const updateBlogValidate = data => {
    const blogData = joi.object({
        blogId: joi.string().max(20).required(),
        blogCategoryId: joi.string().max(20).required(),
        title: joi.string().max(20).required(),
        thumbnail: joi.string().max(20).required(),
        introduction: joi.string().max(20).required(),
        content: joi.string().max(20).required(),
    })
    return blogData.validate(data);
}
const deleteBlogValidate = data => {
    const blogData = joi.object({
        blogId: joi.string().max(20).required()
    })
    return blogData.validate(data);
}
module.exports = {
    getBlogValidate,
    createBlogValidate,
    updateBlogValidate,
    deleteBlogValidate
}