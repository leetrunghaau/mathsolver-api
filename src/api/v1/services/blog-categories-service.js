const { generateId } = require("../helpers/generate-key");
const BlogCategoriesRepository = require("../repositories/blog-categories-repository");

class BlogCategoriesService{
    static async getBlogCategoryById(blogCategoryId) {
        const blogCategory = await BlogCategoriesRepository.getBlogCategoryById(blogCategoryId);
        if(!blogCategory){
            return null;
        }
        return blogCategory;
        
    }
    static async getAllBlogCategory() {
       const blogCategories = await BlogCategoriesRepository.getAllBlogCategory();
       if(blogCategories.length === 0){
        return null;
       }
       return blogCategories;
    }
    static async createBlogCategory(blogCategoryData) {
        blogCategoryData.blogCategoryId = generateId();
        const blogCategory = await BlogCategoriesRepository.createBlogCategory(blogCategoryData);
        if(!blogCategory){
            return null;
        }
        return blogCategory;

    }
    static async updateBlogCategoryById(blogCategoryId, blogCategoryData) {
        const blogCategory = await BlogCategoriesRepository.updateBlogCategoryById(blogCategoryId, blogCategoryData);
        if(!blogCategory){
            return null;
        }
        return blogCategory;

    }
    static async deleteBlogCategoryById(blogCategoryId) {
        const blogCategory = await BlogCategoriesRepository.deleteBlogCategoryById(blogCategoryId);
        if(blogCategory <=0){
            return null;
        }

        return blogCategory;
    }

}
module.exports = BlogCategoriesService;