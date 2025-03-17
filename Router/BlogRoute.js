const express = require('express')
const router = express.Router()
const BlogController = require('../Controller/BlogController')
router.post('/addBlog/:UserId',BlogController.AddBlog)
router.post('/ViewBlog',BlogController.ViewAllBlogs)
router.post('/UpdateBlog/:id',BlogController.EditBlog)
router.post('/deleteBlog',BlogController.DeleteBlog)
module.exports=router