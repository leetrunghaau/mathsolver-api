const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blog-controller');

// Define routes
router.get("/blog/:blogId",  BlogController.getBlogById);
router.get("/blogs",  BlogController.getAllBlog);
router.post("/blog",  BlogController.createBlog);
router.put("/blog",  BlogController.updateBlogById);
router.delete("/blog-/:blogId",  BlogController.deleteBlogById);


module.exports = router;