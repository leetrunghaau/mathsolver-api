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
    try{
      return Product.create(productData);
    }catch (error){
      console.log(error)
    }
    
  }

  static async updateProductById(productId, productData) {
    await Product.update(productData, {
      where: { product_id: productId },
    });
    return this.getProductById(productId);
  }

  static async deleteProductById(productId) {
    return Product.destroy({
      where: { productId: productId },
    });
  }
}

module.exports =  ProductRepository;
