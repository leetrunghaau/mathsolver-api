const express = require('express');
const router = express.Router();
const BlogCategoriesController = require('../controllers/blog-categories-controller');
const { authorization } = require('../middlewares/auth-middleware');
const BlogCategoryValidate = require('../validations/blog-category-validate');

// Define routes
router.get("/blog-category/:blogCategoryId", BlogCategoryValidate.getBlogCategory, BlogCategoriesController.getBlogCategoryById);
router.get("/blog-categories", BlogCategoriesController.getAllBlogCategory);
router.post(
    "/blog-category",
    authorization(['admin']),
    BlogCategoryValidate.createBlogCategory,
    BlogCategoriesController.createBlogCategory
);
router.put(
    "/blog-category",
    authorization(['admin']),
    BlogCategoryValidate.updateBlogCategory,
    BlogCategoriesController.updateBlogCategoryById
);
router.delete(
    "/blog-category/:blogCategoryId",
    authorization(['admin']),
    BlogCategoryValidate.deleteBlogCategory,
    BlogCategoriesController.deleteBlogCategoryById
);


module.exports = router;