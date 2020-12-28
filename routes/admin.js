const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/addnews' , adminController.addnewsGet)

router.post('/addnews/add' , adminController.addnewsPost)

router.get('/contactRequest' , adminController.contactRequest)

router.get('/cooperationRequest' , adminController.cooperationRequest)

router.get('/services' , adminController.services)

router.get('/addservice' , adminController.addserviceGet)

router.post('/addservice/add' , adminController.addservicePost)

router.get('/guides' , adminController.guides)

router.get('/addguide' , adminController.addguideGet)

router.post('/addguide/add' , adminController.addguidePost)

router.get('/addguideandservice' , adminController.addguideandserviceGet)

router.post('/addguideandservice/add' , adminController.addguideandservicePost)

module.exports = router;