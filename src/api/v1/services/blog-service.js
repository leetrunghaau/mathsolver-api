const { generateId } = require("../helpers/generate-key");
const BlogRepository = require("../repositories/blog-repository");

class BlogService {
    static async getBlogById(blogId) {
        const blog = await BlogRepository.getBlogById(blogId);
        if (!blog) {
            return null;
        }
        const blogData = {
            views: blog.views + 1
        };
        this.updateBlogById(blogId, blogData);
        return blog;
    }
    static async getAllBlog() {
        const blog = await BlogRepository.getAllBlog();
        if (blog.length === 0) {
            return null;
        }
        return blog;
    }
    static async createBlog(blogData) {
        blogData.blogId = generateId();
        blogData.createdAt = new Date();
        blogData.modifiedAt = new Date();
        blogData.views = 0;
        const blog = await BlogRepository.createBlog(blogData);
        if (!blog) {
            return null;
        }
        return blog;

    }
    static async updateBlogById(blogId, blogData) {
        blogData.modifiedAt = new Date();
        const blog = await BlogRepository.updateBlogById(blogId, blogData);
        if (!blog) {
            return null;
        }
        return blog;

    }
    static async deleteBlogById(blogId) {
        const blog = await BlogRepository.deleteBlogById(blogId);
        if (blog <= 0) {
            return null;
        }
        return blog;
    }

}
module.exports = BlogService;