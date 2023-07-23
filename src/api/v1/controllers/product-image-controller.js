const ProductImageRepository = require('../repositories/product-image-repository');
const ProductImageService = require('../services/product-image-service');
const { getProductImageValidate, getProductImageMainByProductIdValidate, getAllProductImageByProductIdValidate, updateProductImageByIdValidate, createProductImageValidate, deleteProductImageByIdValidate }
    = require('../validations/product-image-validate');
const createError = require('http-errors')
class ProductImageController {
    static async getProductImageById(req, res, next) {
        try {
            const { error, value } = getProductImageValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const productImage = await ProductImageService.getProductImageById(value.productImageId);
            
            if (!productImage) {
                return next(createError.NotFound('ProductImage not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productImage
            })
        } catch {

        }
    }
    static async getProductImageMainByProductId(req, res, next) {
        try {
            const { error, value } = getProductImageMainByProductIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const productImage = await ProductImageService.getProductImageMainByProductId(value.productId);
            if (!productImage) {
                return next(createError.NotFound('ProductImage not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productImage
            })
        } catch {

        }
    }
    static async getAllProductImage(req, res, next) {
        try {
      
            const productImages = await ProductImageService.getAllProductImage();
            if (!productImages) {
                return next(createError.NotFound('Product Images not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productImages
            })
        } catch {

        }
    }
    static async getAllProductImageByProductId(req, res, next) {
        try {
            const { error, value } = getAllProductImageByProductIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const productImages = await ProductImageService.getAllProductImageByProductId(value.productId);
            if (!productImages) {
                return next(createError.NotFound('Product Images not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productImages
            })
        } catch {

        }
    }

    static async createProductImage(req, res, next) {
        try {
            const { error, value } = createProductImageValidate(req.body)
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            console.log(value);
            const productImage = await ProductImageService.createProductImage(value);
            if (!productImage) {
                return next(createError.InternalServerError());
            };
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productImage
            })
        } catch {

        }
    }
    static async updateProductImageById(req, res, next) {
        try {
            const { error, value } = updateProductImageByIdValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { productImageId, ...updatedValue } = value;
            const productImage = await ProductImageService.updateProductImageById(productImageId, updatedValue);
            if(!productImage){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status:200,
                message:'done',
                data: productImage
            })
        } catch {

        }
    }
    static async deleteProductImageById(req, res, next) {
        try {
            const {error, value} = deleteProductImageByIdValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const productImage = await ProductImageService.deleteProductImageById(value.productImageId);
            if(!productImage){
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status:200,
                message: 'done'
            })

        } catch {

        }
    }
}
module.exports = ProductImageController;