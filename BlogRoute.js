const express = require('express')
const router = express.Router()
const BlogController = require('./Controller/BlogController')
const UserController = require('./Controller/UserController')

router.post('/addBlog/:id',BlogController.BlogImages,BlogController.AddBlog)
router.post('/ViewBlog',BlogController.ViewAllBlogs)
router.post('/UpdateBlog/:id',BlogController.BlogImages,BlogController.EditBlog,)
router.post('/deleteBlog',BlogController.DeleteBlog)




router.post('/UserRegistration',UserController.UserRegistration)
router.post('/UserLogin',UserController.UserLogin)
router.post('/ForgotPassword',UserController.ForgotPassword)
router.post('/ViewAllUsers',UserController.ViewAllUsers)
router.post('/ViewOneUser/:id',UserController.ViewOneUser)
router.post('/EditUser',UserController.EditUser)
router.post('/DeleteUser',UserController.DeleteUser)

module.exports=router