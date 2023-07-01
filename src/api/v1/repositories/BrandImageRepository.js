const brandImage = require('../models/BrandImage')

class BrandImageRepository {
    static async getBrandImageById(brandImageId){
        return brandImage.findByPk(brandImageId);
    }
}
module.exports = BrandImageRepository;