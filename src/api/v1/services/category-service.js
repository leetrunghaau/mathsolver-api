const { generateId } = require('../helpers/generate-key');
const CategoryRepository = require('../repositories/category-repository');

class CategoryService{
static async getCategoryById(categoryId){
    const category = await CategoryRepository.getCategoryById(categoryId);
    if (!category){
        return null;
    }
    return category
}
static async getAllCategory(){
    const categories = await CategoryRepository.getAllCategory();
    if(categories.length === 0){
        return null;
    }
    return categories;
}
static async createCategory(categoryData){
    categoryData.categoryId = await generateId();
    const category = CategoryRepository.createCategory(categoryData);
    if(!category){
        return null;
    }
    return category
}
static async updateCategoryById(categoryId, categoryData){
    const category = await CategoryRepository.updateCategoryById(categoryId, categoryData);
    if(!category){
        return null;
    }
    return category;
}
static async deleteCategoryById(categoryId){
    const category = await CategoryRepository.deleteCategoryById(categoryId);
    if(category<=0){
        return null;
    }
    return category
}
}
module.exports = CategoryService;