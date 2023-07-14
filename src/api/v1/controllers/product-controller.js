// productController.js

const { getProductById } = require('../repositories/product-repository');
const ProductService = require('../services/product-service');
const createError = require('http-errors');


class ProductController {
    static async getAllProduct(req, res, next) {
        try {
            const products = await ProductService.getAllProduct();
            if (!products) {
                return next(createError.InternalServerError())
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
    static async getProductById(req, res, next) {

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
