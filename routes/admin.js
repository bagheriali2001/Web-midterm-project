const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/addnews' , adminController.addnewsGet)

router.post('/addnews' , adminController.addnewsPost)

router.get('/contactRequest' , adminController.contactRequest)

router.get('/cooperationRequest' , adminController.cooperationRequest)

router.get('/services' , adminController.services)

router.get('/addservice' , adminController.addserviceGet)

router.post('/addservice' , adminController.addservicePost)

router.get('/guides' , adminController.guides)

router.get('/addguide' , adminController.addguideGet)

router.post('/addguide' , adminController.addguidePost)

router.get('/addguideandservice' , adminController.addguideandserviceGet)

router.post('/addguideandservice' , adminController.addguideandservicePost)

module.exports = router;