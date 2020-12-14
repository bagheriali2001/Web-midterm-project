const News = require('../models/news')
const Sequelize = require('sequelize')
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

exports.cooperationPage = (req, res, next) => {
    res.render('user/cooperation', {
        pageTitle: 'دعوت به همکاری',
        path: '/cooperation'
    });
};

exports.homePage = (req, res, next) => {
    News.max('id').then(max =>{
        News.findAll( {where:{id: {[Op.gt]: max-4}}})
        .then(products => {
            res.render('user/home', {
                news : products,
                pageTitle: 'وب سایت مرکز فناوری اطالعات دانشگاه صنعتی نوشیروانی بابل',
                path: '/home'
            });
        }).catch(err => {
            console.log(err)
        })
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