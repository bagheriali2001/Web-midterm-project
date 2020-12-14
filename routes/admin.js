const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/addnews' , adminController.addnewsGet)

router.post('/addnews/add' , adminController.addnewsPost)

router.get('/contactRequest' , adminController.contactRequest)

router.get('/cooperationRequest' , adminController.cooperationRequest)


module.exports = router;