const CategoryService = require("../services/category-service");
const { getCategoryValidate, createCategoryValidate, updateCategoryValidate, deleteCategoryValidate } = require("../validations/category-validate");
const createError = require('http-errors')

class CategoryController {
    static async getCategoryById(req, res, next) {
        try {
            const { error, value } = getCategoryValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const category = await CategoryService.getCategoryById(value.categoryId);
            if (!category) {
                return next(createError.NotFound('category not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: category
            })

        }
        catch {

        }
    }
    static async getAllCategory(req, res, next) {
        try {
            const categories = await CategoryService.getAllCategory();
            if (!categories) {
                return next(createError.NotFound('categories not found'));
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: categories
            })

        } catch {

        }
    }
    static async createCategory(req, res, next) {
        try {
            const { error, value } = createCategoryValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const category = await CategoryService.createCategory(value);
            if (!category) {
                return next(createError.InternalServerError());
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: category
            })
        } catch (error) {
            console.log(error)
        }
    }
    static async updateCategoryById(req, res, next) {
        try {
            const { error, value } = updateCategoryValidate(req.body);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const { categoryId, ...categoryData } = value;
            const category = await CategoryService.updateCategoryById(categoryId, categoryData);
            if (!category) {
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status: 200,
                message: 'done',
                data: category
            })
        } catch {

        }


    }
    static async deleteCategoryById(req, res, next) {
        try {
            const { error, value } = deleteCategoryValidate(req.params);
            if (error) {
                return next(createError.BadRequest(error.details[0].message));
            }
            const category = await CategoryService.deleteCategoryById(value.categoryId);
            if (!category) {
                return next(createError.InternalServerError())
            }
            return res.status(200).json({
                status: 200,
                message: 'done'
            })
        } catch {

        }
    }
}
module.exports = CategoryController;