const express = require('express');

const authController = require('../controllers/auth')

const router = express.Router();

router.get('/login' , authController.loginGet)

router.post('/login' , authController.loginPost)

router.get('/addadmin' , authController.addadminGet)

router.post('/addadmin' , authController.addadminPost)

router.get('/changepassword' , authController.changepasswordGet)

router.post('/changepassword' , authController.changepasswordPost)

module.exports = router;