// productRepository.js

const Product = require('../models/Product');

class ProductRepository {
  async getProductById(productId) {
    return Product.findByPk(productId);
  }

  async createProduct(productData) {
    return Product.create(productData);
  }

  async updateProduct(productId, productData) {
    await Product.update(productData, {
      where: { product_id: productId },
    });
    return this.getProductById(productId);
  }

  async deleteProduct(productId) {
    return Product.destroy({
      where: { product_id: productId },
    });
  }
}

module.exports = new ProductRepository();
