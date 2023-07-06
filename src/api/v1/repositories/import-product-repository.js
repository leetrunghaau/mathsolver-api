// importRepository.js

const ImportProduct = require('../models/import-product-model');

class ImportProductRepository {
  static async getImportProductById(importId) {
    return ImportProduct.findByPk(importId);
  }

  static async createImportProduct(importData) {
    return ImportProduct.create(importData);
  }

  static async updateImportProduct(importId, importData) {
    await ImportProduct.update(importData, {
      where: { import_product_id: importId },
    });
    return this.getImportProductById(importId);
  }

  static async deleteImportProduct(importId) {
    return ImportProduct.destroy({
      where: { import_product_id: importId },
    });
  }
}

module.exports =  ImportProductRepository;
