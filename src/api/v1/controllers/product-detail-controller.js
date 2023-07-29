const ProductDetailService = require('../services/product-detail-service');
const { getProductDetailValidate, getProductDetailByProductValidate, createProductDetailValidate, updateProductDetailValidate, deleteProductDetailValidate }
    = require('../validations/product-detail-validate');
const createError = require('http-errors')
class ProductDetailController {
    static async getProductDetailById(req, res, next) {
        try {
            const { error, value } = getProductDetailValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const productDetail = await ProductDetailService.getProductDetailById(value.productDetailId);
            
            if (!productDetail) {
                return next(createError.NotFound('Product detail not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productDetail
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getProductDetailByProductId(req, res, next) {
        try {
            const { error, value } = getProductDetailByProductValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const productDetail = await ProductDetailService.getProductDetailByProductId(value.productId);
            
            if (!productDetail) {
                return next(createError.NotFound('Product detail not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productDetail
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllProductDetail(req, res, next) {
        try {
            const productDetails = await ProductDetailService.getAllProductDetail();
            if (!productDetails) {
                return next(createError.NotFound('ProductDetail not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productDetails
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createProductDetail(req, res, next) {
        try {
            const { error, value } = createProductDetailValidate(req.body)
  

            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            console.log(value);
            const productDetail = await ProductDetailService.createProductDetail(value);
            if (!productDetail) {
                return next(createError.InternalServerError());
            };
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: productDetail
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateProductDetailById(req, res, next) {
        try {

            const { error, value } = updateProductDetailValidate(req.body);

            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { productDetailId, ...updatedValue } = value;
            const productDetail = await ProductDetailService.updateProductDetailById(productDetailId, updatedValue);
            if(!productDetail){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status:200,
                message:'done',
                data: productDetail
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async deleteProductDetailById(req, res, next) {
        try {
            const {error, value} = deleteProductDetailValidate(req.params);

            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }

            const productDetail = await ProductDetailService.deleteProductDetailById(value.productDetailId);
            if(!productDetail){
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status:200,
                message: 'done'
            })

        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = ProductDetailController;