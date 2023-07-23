const ProductImage = require('../models/product-image-model')
class ProductImageRepository {
    static async getProductImageById(productImageId) {
        return ProductImage.findByPk(productImageId);
    }
    static async getProductImageMainByProductId(productId) {
        return ProductImage.findOne({
            where: {
                productId: productId,
                main: true
            }
        })
    }
    static async getAllProductImageByProductId(productId){
        return ProductImage.findAll({where:{productId:productId}});
    }
    static async getAllProductImage() {
        return ProductImage.findAll();
    }
    static async createProductImage(productImageData) {
        return  ProductImage.create(productImageData);
    }
    static async updateProductImageById(productImageId, productImageData) {
        await ProductImage.update(productImageData, {
            where: { productImageId: productImageId }
        });
        return this.getProductImageById(productImageId)
    }
    static async deleteProductImageById(productImageId) {
        return ProductImage.destroy({where:{productImageId:productImageId}});
    }
}
module.exports = ProductImageRepository;