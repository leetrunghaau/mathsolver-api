const { generateId } = require("../helpers/generate-key");
const ProductDetailRepository = require("../repositories/product-detail-repository");

class ProductDetailService {
    static async getProductDetailById(productDetailId) {
        const productDetail = await ProductDetailRepository.getProductDetailById(productDetailId);
        if (!productDetail) {
            return null;
        }
        return productDetail;
    }
    static async getProductDetailByProductId(productId){
        const productDetail = await ProductDetailRepository.getProductDetailById(productId);
        if (!productDetail) {
            return null;
        }
        return productDetail;

    }
    static async getAllProductDetail() {
        const productDetails = await ProductDetailRepository.getAllProductDetail();
        if (productDetails.length === 0) {
            return null;
        }
        return productDetails;
    }
    static async createProductDetail(productDetailData) {
        productDetailData.productDetailId = generateId();
        const productDetail = await ProductDetailRepository.createProductDetail(productDetailData);
        if (!productDetail) {
            return null;
        }
        return productDetail;
    }
    static async updateProductDetailById(productDetailId, productDetailData) {
        const productDetail = await ProductDetailRepository.updateProductDetailById(productDetailId, productDetailData);
        if (!productDetail) {
            return null;
        }
        return productDetail;
    }
    static async deleteProductDetailById(productDetailId) {
        const productDetail = await ProductDetailRepository.deleteProductDetailById(productDetailId);
        if (productDetail <= 0) {
            return null;
        }
        return productDetail;
    }
}
module.exports = ProductDetailService;