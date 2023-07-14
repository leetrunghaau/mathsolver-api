// productRepository.js

const Product = require('../models/product-model');

class ProductRepository {
  static async getAllProduct(){
    return Product.findAll();
  }
  static async getProductById(productId) {
    return Product.findByPk(productId);
  }

  static async createProduct(productData) {
    return Product.create(productData);
  }

  static async updateProduct(productId, productData) {
    await Product.update(productData, {
      where: { product_id: productId },
    });
    return this.getProductById(productId);
  }

  static async deleteProduct(productId) {
    return Product.destroy({
      where: { product_id: productId },
    });
  }
}

module.exports =  ProductRepository;
