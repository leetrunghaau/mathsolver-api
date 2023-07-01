// productRepository.js

const product = require('../models/Product');

class ProductRepository {
  static async getProductById(productId) {
    return product.findByPk(productId);
  }

  static async createProduct(productData) {
    return product.create(productData);
  }

  static async updateProduct(productId, productData) {
    await product.update(productData, {
      where: { product_id: productId },
    });
    return this.getProductById(productId);
  }

  static async deleteProduct(productId) {
    return product.destroy({
      where: { product_id: productId },
    });
  }
}

module.exports =  ProductRepository;
