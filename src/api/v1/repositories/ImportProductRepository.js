// importRepository.js

const importProduct = require('../models/ImportProduct');

class ImportProductRepository {
  static async getImportProductById(importId) {
    return importProduct.findByPk(importId);
  }

  static async createImportProduct(importData) {
    return importProduct.create(importData);
  }

  static async updateImportProduct(importId, importData) {
    await importProduct.update(importData, {
      where: { import_product_id: importId },
    });
    return this.getImportProductById(importId);
  }

  static async deleteImportProduct(importId) {
    return importProduct.destroy({
      where: { import_product_id: importId },
    });
  }
}

module.exports =  ImportProductRepository;
