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

            const blogCategory = await BlogCategoriesService.getBlogCategoryById(req.validateData.blogCategoryId);
            if (!blogCategory) {
                return next(createError.NotFound('bog category not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategory
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
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
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateBlogCategoryById(req, res, next) {
        try {

            const { blogCategoryId, ...blogCategoryData } = req.validateData

            const blogCategory = await BlogCategoriesService.updateBlogCategoryById(blogCategoryId, blogCategoryData);
            if (!blogCategory) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategory
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createBlogCategory(req, res, next) {
        try {

            const blogCategory = await BlogCategoriesService.createBlogCategory(req.validateData);
            if (!blogCategory) {
                return null;
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogCategory
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteBlogCategoryById(req, res, next) {
        try {
     
            const blogCategory = await BlogCategoriesService.deleteBlogCategoryById(req.validateData.blogCategoryId);
            if (!blogCategory) {
                return next(createError.NotFound('blog category not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = BlogCategoriesController