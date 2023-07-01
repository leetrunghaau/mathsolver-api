const productImage = require('../models/ProductImage')
class ProductImageRepository {
    static async getProductImageById(productImageId){
        return productImage.findByPk(productImageId);
    }
}
module.exports = ProductImageRepository;