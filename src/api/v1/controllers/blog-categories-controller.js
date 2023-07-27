const BlogCategoriesService = require('../services/blog-categories-service');
const {
    getBlogCategoryValidate,
    createBlogCategoryValidate,
    updateBlogCategoryValidate,
    deleteBlogCategoryValidate
} = require('../validations/blog-category-validate')
const createError = require('http-errors')
class BlogCategoriesController {
    static async getBlogCategoryById(req, res, next) {
        try {
            const { error, value } = getBlogCategoryValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const blogCategory = await BlogCategoriesService.getBlogCategoryById(value.blogCategoryId);
            if (!blogCategory) {
                return next(createError.NotFound('bog category not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategory
            })
        } catch {

        }
    }
    static async getAllBlogCategory(req, res, next) {
        try {
            const blogCategories = await BlogCategoriesService.getAllBlogCategory();
            if (!blogCategories) {
                return next(createError.NotFound('blog category not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategories
            })
        } catch {

        }
    }
    static async updateBlogCategoryById(req, res, next) {
        try {
            const { error, value } = updateBlogCategoryValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { blogCategoryId, ...blogCategoryData } = value
            const blogCategory = await BlogCategoriesService.updateBlogCategoryById(blogCategoryId, blogCategoryData);
            if (!blogCategory) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategory
            })
        } catch {

        }
    }
    static async createBlogCategory(req, res, next) {
        try {
            const { error, value } = createBlogCategoryValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const blogCategory = await BlogCategoriesService.createBlogCategory(value);
            if (!blogCategory) {
                return null;
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategory
            })
        } catch {

        }
    }
    static async deleteBlogCategoryById(req, res, next) {
        try {
            const { error, value } = deleteBlogCategoryValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));

            }
            const blogCategory = await BlogCategoriesService.deleteBlogCategoryById(value.blogCategoryId);
            if (!blogCategory) {
                return next(createError.NotFound('blog category not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
            })
        } catch (error) {
            console.log(error.name)
        }
    }
}
module.exports = BlogCategoriesController