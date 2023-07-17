const Blog = require('../models/blog-model')
class BlogRepository {
    static async getBlogById(blogId) {
        return Blog.findOne({ where: { blogId: blogId } });
    }
    static async getAllBlog() {
        return Blog.findAll();
    }
    static async createBlog(blogData) {
        return Blog.create(blogData);
    }
    static async updateBlogById(blogId, blogData) {
        await Blog.update(blogData,{ where: { blogId: blogId } });
        return this.getBlogById(blogId);
    }
    static async deleteBlogById(blogId) {
        return Blog.destroy({ where: { blogId: blogId } });
    }
}
module.exports = BlogRepository;