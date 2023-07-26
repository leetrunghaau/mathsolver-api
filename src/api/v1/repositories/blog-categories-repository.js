const BlogCategories = require('../models/blog-categories-model')
class BlogCategoriesRepository {
    static async getBlogCategoryById(blogCategoryId) {
        return BlogCategories.findByPk(blogCategoryId);
    }
    static async getAllBlogCategory() {
        return BlogCategories.findAll();
    }
    static async createBlogCategory(blogCategoryData) {
        return BlogCategories.create(blogCategoryData)

    }
    static async updateBlogCategoryById(blogCategoryId, blogCategoryData) {
        await BlogCategories.update(blogCategoryData, {
            where: { blogCategoryId: blogCategoryId }
        })
        return this.getBlogCategoryById(blogCategoryId);

    }
    static async deleteBlogCategoryById(blogCategoryId) {
        try{
            return BlogCategories.destroy({
                where: { blogCategoryId: blogCategoryId }
            })
        }catch (error){
            console.log(error)
        }
        
    }


}
module.exports = BlogCategoriesRepository;