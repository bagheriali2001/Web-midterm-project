const News = require('../models/news')
const Cooperation = require('../models/cooperation')
const Contact = require('../models/contact')
const Service = require('../models/service')
const Guide = require('../models/guide')

const Sequelize = require('sequelize')
const { guides } = require('./admin')
const Op = Sequelize.Op
exports.introductionPage = (req, res, next) => {
    res.render('user/introduction', {
        pageTitle: 'معرفی مرکز و اهداف',
        path: '/introduction'
    });
};

exports.staffPage = (req, res, next) => {
    res.render('user/staff', {
        pageTitle: 'معرفی افراد و پرسنل',
        path: '/staff',
        staff: []
    });
};

exports.principalsPage = (req, res, next) => {
    res.render('user/principals', {
        pageTitle: 'روسای مرکز از ابتدا تا کنون',
        path: '/principals'
    });
};

exports.principlesPage = (req, res, next) => {
    res.render('user/principles', {
        pageTitle: 'قوانین و آیین نماه های حوزه فناوری اطالعات',
        path: '/principles'
    });
};

exports.contactPage = (req, res, next) => {
    res.render('user/contact', {
        pageTitle: 'ارتباط با مرکز',
        path: '/contact'
    });
};

exports.addContactPost = (req, res, next) => {
    const name = req.body.name
    const subject = req.body.subject
    const email = req.body.email
    const text = req.body.text
    Contact.create({
        name : name,
        subject : subject,
        email : email,
        text : text
    }).then(result => {
        console.log("Added!")
        res.redirect('/contact')
    }).catch(err => {
        console.log(err)
    })
}

exports.cooperationPage = (req, res, next) => {
    res.render('user/cooperation', {
        pageTitle: 'دعوت به همکاری',
        path: '/cooperation'
    });
};

exports.addCooperationPost = (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const phoneNumber = req.body.phoneNumber
    const interest = req.body.interest
    const description = req.body.description
    Cooperation.create({
        name : name,
        email : email,
        phoneNumber : phoneNumber,
        interest : interest,
        description : description
    }).then(result => {
        console.log("Added!")
        res.redirect('/cooperation')
    }).catch(err => {
        console.log(err)
    })
}

exports.homePage = (req, res, next) => {
    News.findAll( { order: [['id', 'DESC']], limit: 4 })
    .then(news => {
        res.render('user/home', {
            news : news,
            pageTitle: 'وب سایت مرکز فناوری اطالعات دانشگاه صنعتی نوشیروانی بابل',
            path: '/home'
        });
    }).catch(err => {
        console.log(err)
    })
};

exports.getOneNews = (req, res, next) =>{
    const newsId = req.params.newsId
    News.findAll({where : {id : newsId}})
        .then(news => {
            res.render('user/news-detail', {
                news : news[0],
                pageTitle: news.title,
                path: '/news/'+ news.title
            })
        }).catch(err => {
            console.log(err)
        })
} 


exports.guidePage = (req, res, next) => {
    Guide.findAll()
    .then(guides => {
        res.render('user/guide', {
            guides : guides,
            pageTitle: 'راهنمای کاربران',
            path: '/guide'
        });
    }).catch(err => {
        console.log(err)
    })
};

exports.servicesPage = (req, res, next) => {
    Service.findAll()
        .then(services => {
            res.render('user/services', {
                services : services,
                pageTitle: 'خدمات فناوری اطلاعات دانشگاه',
                path: '/services'
            });
        }).catch(err => {
            console.log(err)
        })
};