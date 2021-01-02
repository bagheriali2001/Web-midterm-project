const express = require('express')

const authController = require('../controllers/auth')

const router = express.Router()

router.get('/login' , authController.loginGet)

router.post('/login' , authController.loginPost)

router.get('/logout' , authController.logoutGet)

router.get('/addadmin' , authController.addAdminGet)

router.post('/addadmin' , authController.addAdminPost)

router.get('/changepassword' , authController.changePasswordGet)

router.post('/changepassword' , authController.changePasswordPost)

module.exports = router;