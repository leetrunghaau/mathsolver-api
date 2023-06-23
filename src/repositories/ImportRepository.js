// importRepository.js

const ImportProduct = require('../models/ImportProduct');

class ImportRepository {
  async getImportById(importId) {
    return ImportProduct.findByPk(importId);
  }

  async createImport(importData) {
    return ImportProduct.create(importData);
  }

  async updateImport(importId, importData) {
    await ImportProduct.update(importData, {
      where: { import_product_id: importId },
    });
    return this.getImportById(importId);
  }

  async deleteImport(importId) {
    return ImportProduct.destroy({
      where: { import_product_id: importId },
    });
  }
}

module.exports = new ImportRepository();
