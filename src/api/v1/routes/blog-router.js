const express = require('express');
const router = express.Router();
const BlogController = require('../controllers/blog-controller');
const { authorization } = require('../middlewares/auth-middleware');

// Define routes
router.get("/blog/:blogId",  BlogController.getBlogById);
router.get("/blogs",  BlogController.getAllBlog);
router.post("/blog", authorization(['admin']),   BlogController.createBlog);
router.put("/blog", authorization(['admin']), BlogController.updateBlogById);
router.delete("/blog/:blogId", authorization(['admin']), BlogController.deleteBlogById);


module.exports = router;