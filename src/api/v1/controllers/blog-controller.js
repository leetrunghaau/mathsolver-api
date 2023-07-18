const BlogService = require('../services/blog-service');
const createError = require('http-errors')
const { getBlogValidate, deleteBlogValidate, updateBlogValidate, createBlogValidate } = require('../validations/blog-validate')
class BlogController {
    static async getBlogById(req, res, next) {
        try {
            const { error, value } = getBlogValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const blog = await BlogService.getBlogById(value.blogId);
            if (!blog) {
                return next(createError.NotFound('blog not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blog
            })
        } catch {

        }
    }
    static async getAllBlog(req, res, next) {
        try {
            const blogs = await BlogService.getAllBlog();
            if (!blogs) {
                return next(createError.NotFound('blog not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blogs
            })
        } catch {

        }
    }
    static async createBlog(req, res, next) {
        try {
            const { error, value } = createBlogValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const blog = await BlogService.createBlog(value);
            if (!blog) {
                return next(createError.NotFound('blog not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blog
            })
        } catch {

        }
    }
    static async updateBlogById(req, res, next) {
        try {
            const { error, value } = updateBlogValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { blogId, ...blogData } = value;
            const blog = await BlogService.updateBlogById(blogId, blogData);
            if (!blog) {
                return next(createError.NotFound('blog not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blog
            })
        } catch {

        }
    }
    static async deleteBlogById(req, res, next) {
        try {
            const { error, value } = deleteBlogValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const blog = await BlogService.deleteBlogById(value.blogId);
            if (!blog) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: blog
            })
        } catch {

        }
    }

}
module.exports = BlogController;