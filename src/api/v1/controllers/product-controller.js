// productController.js

const BrandService = require('../services/brand-service');
const CategoryService = require('../services/category-service');
const ProductService = require('../services/product-service');
const { getProductValidate, createProductValidate, deleteProductValidate, updateProductValidate } = require('../validations/product-validate');
const createError = require('http-errors');



class ProductController {
    static async getProductById(req, res, next) {
        try {
            const { error, value } = getProductValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const product = await ProductService.getProductById(value.productId);
            if (!product) {
                return next(createError.NotFound('product not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: product
            })
        } catch {

        }
    }
    static async getAllProduct(req, res, next) {
        try {
            const products = await ProductService.getAllProduct();
            if (!products) {
                return next(createError.NotFound('product not found'))
            }
            return res.status(200).json({
                status: 200,
                message: "done",
                data: products
            })
        } catch (error) {
            console.log(error)
        }
    }
    static async createProduct(req, res, next) {
        try {
            const { error, value } = createProductValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }

            if (value.brandId != null) {
                if (!await BrandService.getBrandById(value.brandId)) {
                    return next(createError.BadRequest('brandId value not match'));
                }
            }
            if (value.categoryId != null) {
                if (!await CategoryService.getCategoryById(value.categoryId)) {
                    return next(createError.BadRequest('categoryId value not match'));
                }
            }
            const product = await ProductService.createProduct(value);
            if (!product) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: product
            })
        } catch {

        }
    }
    static async updateProductById(req, res, next) {
        const { error, value } = updateProductValidate(req.body);
        if (error) {
            return next(createError.BadRequest(error.details[0].message));
        }
        const { productId, ...productData } = value;
        const product = await ProductService.updateProductById(productId, productData);
        if (!product) {
            return next(createError.InternalServerError());
        }
        return res.status(200).json({
            status: 200,
            message: 'done',
            data: product
        })
    }
    static async deleteProductById(req, res, next) {
        const { error, value } = deleteProductValidate(req.params);
        if (error) {
            return next(createError.BadRequest(error.details[0].message));
        }
        const product = await ProductService.deleteProductById(value.productId);
        if (!product) {
            return next(createError.InternalServerError());
        }
        return res.status(200).json({
            status: 200,
            message: 'done'
        })

    }

    static async getAllProductByName(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getAllProductByPrice(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getAllProductByStoking(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getAllProductByBrand(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getAllProductByCategory(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getLimitProduct(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getLimitProductByName(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getLimitProductByPrice(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getLimitProductByStoking(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getLimitProductByBrand(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }
    static async getLimitProductByCategory(req, res, next) {
        try {
            //liểm tra validate
            //gọi service tương ứng
            //kiểm tra lỗi
            //trả kết quả
        } catch (error) {
            console.log(error)
        }
    }

}
// Controller methods

module.exports = ProductController;
