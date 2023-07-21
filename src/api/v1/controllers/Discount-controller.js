const DiscountService = require('../services/discount-service');
const {
    getDiscountValidate,
    createDiscountValidate,
    updateDiscountValidate,
    deleteDiscountValidate }
    = require('../validations/discount-validate');
const createError = require('http-errors')
class DiscountController {
    static async getDiscountById(req, res, next) {
        try {
            const { error, value } = getDiscountValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const discount = await DiscountService.getDiscountById(value.discountId);
            
            if (!discount) {
                return next(createError.NotFound('Discount not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: discount
            })
        } catch {

        }
    }
    static async getAllDiscount(req, res, next) {
        try {
            const discounts = await DiscountService.getAllDiscount();
            if (!discounts) {
                return next(createError.NotFound('Discount not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: discounts
            })
        } catch {

        }
    }
    static async createDiscount(req, res, next) {
        try {
            const { error, value } = createDiscountValidate(req.body)
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            

            const discount = await DiscountService.createDiscount(value);
            console.log('checck')
            console.log(discount)
            if (!discount) {
                return next(createError.InternalServerError());
            };
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: discount
            })
        } catch {

        }
    }
    static async updateDiscountById(req, res, next) {
        try {
            const { error, value } = updateDiscountValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { discountId, ...updatedValue } = value;
            const discount = await DiscountService.updateDiscountById(discountId, updatedValue);
            if(!discount){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status:200,
                message:'done',
                data: discount
            })
        } catch {

        }
    }
    static async deleteDiscountById(req, res, next) {
        try {
            const {error, value} = deleteDiscountValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            console.log(value)
            const discount = await DiscountService.deleteDiscountById(value.discountId);
            if(!discount){
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
module.exports = DiscountController;