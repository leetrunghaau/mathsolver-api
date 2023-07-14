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

  static async updateBrand(brandId, brandData) {
    await Brand.update(brandData, {
      where: { brand_id: brandId },
    });
    return this.getBrandById(brandId);
  }

  static async deleteBrand(brandId) {
    return Brand.destroy({
      where: { brand_id: brandId },
    });
  }
}

module.exports = BrandRepository;
