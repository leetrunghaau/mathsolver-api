
const createError = require('http-errors')
const ImportProductService = require('../services/import-product-service')

class ImportProductController{

    static async getHistoryByProductId(req, res, next){
        try{
            const importsProduct = await ImportProductService.getAllImportProductByProductId(req.validateData.productId);
            if(!importsProduct){
                return next(createError.NotFound('sản phẩm này không chưa có lịch sử'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: importsProduct
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async createImportProduct (req, res, next){
        try{
            req.validateData.userId = req.userId;
            const importProduct = await ImportProductService.createImportProduct(req.validateData)
            if(!importProduct){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: importProduct
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
    static async updateImportProduct (req, res, next){
        try{
            req.validateData.userId = req.userId;
            const {importProductId, ...updateData} = req.validateData;
            const importProduct = await ImportProductService.updateImportProduct(importProductId, updateData)
            if(!importProduct){
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: importProduct
            })
        } catch  (error) {
            console.log(error);
            return next(createError.InternalServerError());
        }
    }
}
module.exports = ImportProductController