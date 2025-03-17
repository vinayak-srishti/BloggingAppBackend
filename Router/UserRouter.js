const express = require('express')
const router = express.Router()
const UserController = require('../Controller/UserController')

router.post('/UserRegistration',UserController.UserRegistration)
router.post('/UserLogin',UserController.UserLogin)
router.post('/ForgotPassword',UserController.ForgotPassword)
router.post('/ViewAllUsers',UserController.ViewAllUsers)
router.post('/ViewOneUser/:id',UserController.ViewOneUser)
router.post('/EditUser',UserController.EditUser)
router.post('/DeleteUser',UserController.DeleteUser)
module.exports=router