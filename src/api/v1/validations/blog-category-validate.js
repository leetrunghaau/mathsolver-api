const joi = require('joi')
const createError = require('http-errors')
// const getBlogCategoryValidate = data => {
//     const blogCategoryData = joi.object({
//         blogCategoryId: joi.string().max(20).required()
//     })
//     return blogCategoryData.validate(data);
// }
// const createBlogCategoryValidate = data => {
//     const blogCategoryData = joi.object({
//         name: joi.string().max(50).required(),
//         parent: joi.string().max(20).required()
//     })
//     return blogCategoryData.validate(data);
// }
// const deleteBlogCategoryValidate = data => {
//     const blogCategoryData = joi.object({
//         blogCategoryId: joi.string().max(20).required()
//     })
//     return blogCategoryData.validate(data);
// }
// const updateBlogCategoryValidate = data => {
//     const blogCategoryData = joi.object({
//         blogCategoryId: joi.string().max(20).required(),
//         name: joi.string().max(50).required(),
//         parent: joi.string().max(20).required()
//     })
//     return blogCategoryData.validate(data);
// }
// module.exports = {
//     getBlogCategoryValidate,
//     createBlogCategoryValidate,
//     updateBlogCategoryValidate,
//     deleteBlogCategoryValidate
// }
class BlogCategoryValidate {
    static getBlogCategory(req, res, next) {
        const validationResult = joi.object({
            blogCategoryId: joi.string().max(20).required()

        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    }
    static createBlogCategory(req, res, next) {
        const validationResult = joi.object({
            name: joi.string().max(50).required(),
            parent: joi.string().max(20).allow(null).required()

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    }
    static updateBlogCategory(req, res, next) {
        const validationResult = joi.object({
            blogCategoryId: joi.string().max(20).required(),
            name: joi.string().max(50).required(),
            parent: joi.string().max(20).allow(null).required()

        }).validate(req.body);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.body;
        next();
    }
    static deleteBlogCategory(req, res, next) {
        const validationResult = joi.object({
            blogCategoryId: joi.string().max(20).required()

        }).validate(req.params);
        if (validationResult.error) {
            return next(createError.BadRequest(validationResult.error.details[0].message));
        }
        req.validateData = req.params;
        next();
    }
}
module.exports = BlogCategoryValidate;