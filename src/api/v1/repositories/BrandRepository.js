// brandRepository.js

const brand = require('../models/Brand');

class BrandRepository {
  static async getBrandById(brandId) {
    return brand.findByPk(brandId);
  }

  static async createBrand(brandData) {
    return brand.create(brandData);
  }

  static async updateBrand(brandId, brandData) {
    await brand.update(brandData, {
      where: { brand_id: brandId },
    });
    return this.getBrandById(brandId);
  }

  static async deleteBrand(brandId) {
    return brand.destroy({
      where: { brand_id: brandId },
    });
  }
}

module.exports =  BrandRepository;
