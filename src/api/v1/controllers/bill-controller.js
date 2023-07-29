const { valid } = require('joi');
const BillService = require('../services/bill-service');
const { getBillValidate } = require('../validations/bill-validate')
const createError = require('http-errors');
const OrderService = require('../services/order-service');
class BillController {
    static async getBillById(req, res, next) {
        try {
            const { error, value } = getBillValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message))
            }
            const bill = await BillService.getBillById(value.billId);
            if (!bill) {
                return next(createError.NotFound())
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: bill
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async getAllBillByUser(req, res, next) {
        try {
            const orders = await OrderService.getListOrderByUserId(req.userId);
            if (!orders) {
                return next(createError.NotFound('order not found'))
            }

            const bills = await BillService.getAllBillByListOrderId(orders);
            if (!bills) {
                return next(createError.NotFound('bill not found'));
            }

            return res.status(200).json({
                status: 200,
                message: 'done',
                data: bills
            })
        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createBill(req, res, next) { // hàm này sẽ được sử dụng và khi hoàng thành đơn hàng sẽ tự động tạo ra bill
        try {

        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateBill(req, res, next) { // hàm này chỉ cho duy nhất user aystem quản lý
        try {

        } catch {

        }
    }
    static async deleteBill(req, res, next) { // hàm này chỉ cho duy nhất user aystem quản lý
        try {

        } catch (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = BillController;
