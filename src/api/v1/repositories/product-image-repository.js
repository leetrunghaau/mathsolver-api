const ProductImage = require('../models/product-image-model')
class ProductImageRepository {
    static async getProductImageById(productImageId){
        return ProductImage.findByPk(productImageId);
    }
}
module.exports = ProductImageRepository;