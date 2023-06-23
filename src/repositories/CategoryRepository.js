// categoryRepository.js

const Category = require('../models/Categories');

class CategoryRepository {
  async getCategoryById(categoryId) {
    return Category.findByPk(categoryId);
  }

  async createCategory(categoryData) {
    return Category.create(categoryData);
  }

  async updateCategory(categoryId, categoryData) {
    await Category.update(categoryData, {
      where: { category_id: categoryId },
    });
    return this.getCategoryById(categoryId);
  }

  async deleteCategory(categoryId) {
    return Category.destroy({
      where: { category_id: categoryId },
    });
  }
}

module.exports = new CategoryRepository();
