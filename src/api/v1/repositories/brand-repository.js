// brandRepository.js

const Brand = require('../models/brand-model');

class BrandRepository {
  static async getBrandById(brandId) {
    return Brand.findByPk(brandId);
  }
  static async getAllBrand() {
    return Brand.findAll();
  }
  static async createBrand(brandData) {
    return Brand.create(brandData);
  }

  static async updateBrandById(brandId, brandData) {
    await Brand.update(brandData, {
      where: { brandId: brandId },
    });
    return this.getBrandById(brandId);
  }

  static async deleteBrandById(brandId) {
    return Brand.destroy({
      where: { brandId: brandId },
    });
  }
}

module.exports = BrandRepository;
