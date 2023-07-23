const { generateId } = require("../helpers/generate-key");
const ProductImageRepository = require("../repositories/product-image-repository");

class ProductImageService {
    static async getProductImageById(productImageId) {
        const productImage = await ProductImageRepository.getProductImageById(productImageId);
        if (!productImage) {
            return null;
        }
        return productImage;
    }
    static async getProductImageMainByProductId(productId){
        const productImage = await ProductImageRepository.getProductImageMainByProductId(productId);
        if (!productImage) {
            return null;
        }
        return productImage;
    }
    static async getAllProductImage() {
        const productImages = await ProductImageRepository.getAllProductImage();
        if (productImages.length === 0) {
            return null;
        }
        return productImages;
    }
    static async getAllProductImageByProductId(productId){
        const productImages =await ProductImageRepository.getAllProductImageByProductId(productId);
        if (productImages.length === 0) {
            return null;
        }
        return productImages;
    }
    static async createProductImage(productImageData) {
        productImageData.productImageId = generateId();
        const productImage = await ProductImageRepository.createProductImage(productImageData);
        if (!productImage) {
            return null;
        }
        return productImage;
    }
    static async updateProductImageById(productImageId, productImageData) {
        const productImage = await ProductImageRepository.updateProductImageById(productImageId, productImageData);
        if (!productImage) {
            return null;
        }
        return productImage;
    }
    static async deleteProductImageById(productImageId) {
        const productImage = await ProductImageRepository.deleteProductImageById(productImageId);
        if (productImage <= 0) {
            return null;
        }
        return productImage;
    }
}
module.exports = ProductImageService;