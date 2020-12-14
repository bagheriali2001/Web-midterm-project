const News = require('../models/news')
const Cooperation = require('../models/cooperation')
const Contact = require('../models/contact')


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

exports.contactRequest = (req, res, next) => {
    Contact.findAll( { order: [['id', 'DESC']]})
    .then(contacts => {
        res.render('admin/contactRequest', {
            contacts : contacts,
            pageTitle: 'درخواست های تماس',
            path: '/contactRequest'
        });
    }).catch(err => {
        console.log(err)
    })
}

exports.cooperationRequest = (req, res, next) => {
    Cooperation.findAll( { order: [['id', 'DESC']]})
    .then(cooperations => {
        res.render('admin/cooperationRequest', {
            cooperations : cooperations,
            pageTitle: 'درخواست های همکاری',
            path: '/cooperationRequest'
        });
    }).catch(err => {
        console.log(err)
    })
}
