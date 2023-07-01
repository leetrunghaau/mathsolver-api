// categoryRepository.js

const category = require('../models/Categories');

class CategoryRepository {
  static async getCategoryById(categoryId) {
    return category.findByPk(categoryId);
  }

  static async createCategory(categoryData) {
    return category.create(categoryData);
  }

  static async updateCategory(categoryId, categoryData) {
    await category.update(categoryData, {
      where: { category_id: categoryId },
    });
    return this.getCategoryById(categoryId);
  }

  static async deleteCategory(categoryId) {
    return category.destroy({
      where: { category_id: categoryId },
    });
  }
}

module.exports =  CategoryRepository;
