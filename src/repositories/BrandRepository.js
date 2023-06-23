// brandRepository.js

const Brand = require('../models/Brand');

class BrandRepository {
  async getBrandById(brandId) {
    return Brand.findByPk(brandId);
  }

  async createBrand(brandData) {
    return Brand.create(brandData);
  }

  async updateBrand(brandId, brandData) {
    await Brand.update(brandData, {
      where: { brand_id: brandId },
    });
    return this.getBrandById(brandId);
  }

  async deleteBrand(brandId) {
    return Brand.destroy({
      where: { brand_id: brandId },
    });
  }
}

module.exports = new BrandRepository();
