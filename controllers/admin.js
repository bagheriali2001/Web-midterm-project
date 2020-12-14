const News = require('../models/news')

exports.addnewsGet = (req, res, next) => {
    res.render('admin/addnews', {
        pageTitle: 'اضافه کردن خبر',
        path: '/addnews'
    });
};

exports.addnewsPost = (req, res, next) => {
    res.render('admin/addnews', {
        pageTitle: 'اضافه کردن خبر',
        path: '/addnews'
    });
};