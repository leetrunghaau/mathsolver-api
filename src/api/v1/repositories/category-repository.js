// categoryRepository.js

const Categories = require('../models/categories-model');

class CategoryRepository {
  static async getCategoryById(categoryId) {
    return Categories.findByPk(categoryId);
  }

  static async createCategory(categoryData) {
    return Categories.create(categoryData);
  }

  static async updateCategory(categoryId, categoryData) {
    await Categories.update(categoryData, {
      where: { category_id: categoryId },
    });
    return this.getCategoryById(categoryId);
  }

  static async deleteCategory(categoryId) {
    return Categories.destroy({
      where: { category_id: categoryId },
    });
  }
}

module.exports =  CategoryRepository;
