
const express = require('express');
const { authorization } = require('../middlewares/auth-middleware');
const CategoryController = require('../controllers/category-controller');
const router = express.Router();
// Define routes
router.get('/category/:categoryId', CategoryController.getCategoryById);
router.get('/categories', CategoryController.getAllCategory);
router.post('/category', authorization(['admin']), CategoryController.createCategory);
router.put('/category', authorization(['admin']), CategoryController.updateCategoryById);
router.delete('/category/:categoryId', authorization(['admin']), CategoryController.deleteCategoryById)



module.exports = router;