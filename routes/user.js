const express = require('express');

const userController = require('../controllers/user')

const router = express.Router();

router.get('/introduction' , userController.introductionPage)

router.get('/staff' , userController.staffPage)

router.get('/principals' , userController.principalsPage)

router.get('/principles' , userController.principlesPage)

router.get('/home' , userController.homePage)

router.get('/cooperation' , userController.cooperationPage)

router.post('/cooperation' , userController.addCooperationPost)

router.get('/contact' , userController.contactPage)

router.post('/contact' , userController.addContactPost)

router.get('/news/:newsId' , userController.getOneNews)

router.get('/guide' , userController.guidePage)

router.get('/services' , userController.servicesPage)

router.get('/', (req, res) => {res.redirect('/home');})
module.exports = router;