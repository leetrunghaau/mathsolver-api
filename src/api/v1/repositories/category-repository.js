// categoryRepository.js

const Categories = require('../models/categories-model');

class CategoryRepository {
  static async getCategoryById(categoryId) {
    return Categories.findByPk(categoryId);
  }
  static async getAllCategory() {
    return Categories.findAll();
  }
  static async createCategory(categoryData) {
    return Categories.create(categoryData);
  }

  static async updateCategoryById(categoryId, categoryData) {
    await Categories.update(categoryData, {
      where: { categoryId: categoryId },
    });
    return this.getCategoryById(categoryId);
  }

  static async deleteCategoryById(categoryId) {
    return Categories.destroy({
      where: { categoryId: categoryId },
    });
  }
}

module.exports = CategoryRepository;
