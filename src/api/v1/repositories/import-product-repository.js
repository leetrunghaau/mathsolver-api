// importRepository.js

const ImportProduct = require('../models/import-product-model');

class ImportProductRepository {
  static async getImportProductById(importProductId) {
    return ImportProduct.findByPk(importProductId);
  }
  static async getAllImportProduct(){
    return ImportProduct.findAll();
  }
  static async getAllImportProductByProductId(productId){
    return ImportProduct.findAll({where:{productId: productId}})
  }
  static async createImportProduct(importProductData) {
    return ImportProduct.create(importProductData);
  }

  static async updateImportProduct(importProductId, importProductData) {
    await ImportProduct.update(importProductData, {
      where: { importProductId: importProductId },
    });
    return this.getImportProductById(importProductId);
  }

  static async deleteImportProduct(importProductId) {
    return ImportProduct.destroy({
      where: { importProductId: importProductId },
    });
  }
}

module.exports =  ImportProductRepository;
