const ProductDetail = require('../models/product-detail-model')
class ProductDetailRepository {
    static async getProductDetailById(ProductDetailId) {
        return ProductDetail.findByPk(ProductDetailId);
    }
    static async getProductDetailByProductId(productId){
        return ProductDetail.findOne({where:{productId: productId}})
    }
    static async getAllProductDetail() {
        return ProductDetail.findAll();
    }
    static async createProductDetail(productDetailData) {
        return ProductDetail.create(productDetailData);
    }
    static async updateProductDetailById(productDetailId, productDetailData) {
        await ProductDetail.update(productDetailData, {
            where: { productDetailId: productDetailId }
        });
        return this.getProductDetailById(productDetailId)
    }
    static async deleteProductDetailById(productDetailId) {
        return ProductDetail.destroy({where:{productDetailId:productDetailId}});
    }
}
module.exports = ProductDetailRepository;