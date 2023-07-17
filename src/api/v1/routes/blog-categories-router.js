const express = require('express');
const router = express.Router();
const BlogCategoriesController = require('../controllers/blog-categories-controller');

// Define routes
router.get("/blog-category/:blogCategoryId",  BlogCategoriesController.getBlogCategoryById);
router.get("/blog-categories",  BlogCategoriesController.getAllBlogCategory);
router.post("/blog-category",  BlogCategoriesController.createBlogCategory);
router.put("/blog-category",  BlogCategoriesController.updateBlogCategoryById);
router.delete("/blog-category/:blogCategoryId",  BlogCategoriesController.deleteBlogCategoryById);


module.exports = router;