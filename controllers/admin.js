const News = require('../models/news')

exports.addnewsGet = (req, res, next) => {
    res.render('admin/addnews', {
        pageTitle: 'اضافه کردن خبر',
        path: '/addnews'
    });
};

exports.addnewsPost = (req, res, next) => {
    const title = req.body.title
    const description = req.body.description
    const text = req.body.text
    const author = req.body.author
    const date = req.body.date
    News.create({
        title : title,
        description : description,
        text : text,
        author : author,
        date : date
    }).then(result => {
        console.log("Added!")
        res.redirect('/addnews')
    }).catch(err => {
        console.log(err)
    })
};