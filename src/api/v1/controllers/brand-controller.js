const BrandService = require('../services/brand-service');
const {
    getBrandValidate,
    createBrandValidate,
    updateBrandValidate,
    deleteBrandValidate }
    = require('../validations/brand-validate');
const createError = require('http-errors')
class BrandController {
    static async getBrandById(req, res, next) {
        try {
            const { error, value } = getBrandValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const brand = await BrandService.getBrandById(value.brandId);
            
            if (!brand) {
                return next(createError.NotFound('brand not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: brand
            })
        } catch {

        }
    }
    static async getAllBrand(req, res, next) {
        try {
            const brands = await BrandService.getAllBrand();
            if (!brands) {
                return next(createError.NotFound('brand not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: brands
            })
        } catch {

        }
    }
    static async createBrand(req, res, next) {
        try {
            const { error, value } = createBrandValidate(req.body)
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            console.log(value);

            const brand = await BrandService.createBrand(value);
            console.log(brand);
            console.log(brand);
            if (!brand) {
                return next(createError.InternalServerError());
            };
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: brand
            })
        } catch {

        }
    }
    static async updateBrandById(req, res, next) {
        try {
            const { error, value } = updateBrandValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { brandId, ...updatedValue } = value;
            const brand = await BrandService.updateBrandById(brandId, updatedValue);
            if(!brand){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status:200,
                message:'done',
                data: brand
            })
        } catch {

        }
    }
    static async deleteBrandById(req, res, next) {
        try {
            console.log('gdhfghujgklblkjbkljbkj')
            const {error, value} = deleteBrandValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            console.log(value)
            const brand = await BrandService.deleteBrandById(value.brandId);
            if(!brand){
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
module.exports = BrandController;