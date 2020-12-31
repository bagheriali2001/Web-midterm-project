const News = require('../models/news')
const Cooperation = require('../models/cooperation')
const Contact = require('../models/contact')
const Service = require('../models/service')
const Guide = require('../models/guide')
const Admin = require('../models/admin')


exports.addnewsGet = (req, res, next) => {
    res.render('admin/addnews', {
        isAuthenticated : req.session.isLoggedIn,
        isSuperAdmin : req.session.isSuperAdmin,
        pageTitle: 'اضافه کردن خبر',
        path: '/addnews'
    });
};

exports.addnewsPost = (req, res, next) => {
    const title = req.body.title
    const description = req.body.description
    const text = req.body.text
    const img = req.body.img
    const author = req.body.author
    const date = req.body.date
    News.create({
        title : title,
        description : description,
        text : text,
        img : img,
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
            isAuthenticated : req.session.isLoggedIn,
            isSuperAdmin : req.session.isSuperAdmin,
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
            isAuthenticated : req.session.isLoggedIn,
            isSuperAdmin : req.session.isSuperAdmin,
            cooperations : cooperations,
            pageTitle: 'درخواست های همکاری',
            path: '/cooperationRequest'
        });
    }).catch(err => {
        console.log(err)
    })
}

exports.services = (req, res, next) => {
    Service.findAll( { order: [['id', 'DESC']]})
    .then(services => {
        res.render('admin/services', {
            isAuthenticated : req.session.isLoggedIn,
            isSuperAdmin : req.session.isSuperAdmin,
            services : services,
            pageTitle: 'لیست خدمات',
            path: '/services'
        });
    }).catch(err => {
        console.log(err)
    })
}

exports.addserviceGet = (req, res, next) => {
    res.render('admin/addservice', {
        isAuthenticated : req.session.isLoggedIn,
        isSuperAdmin : req.session.isSuperAdmin,
        pageTitle: 'اضافه کردن خدمات',
        path: '/addservice'
    });
};

exports.addservicePost = (req, res, next) => {
    const name = req.body.name
    const description = req.body.description
    const img = req.body.img
    const url = req.body.url

    const isPublic = Boolean(req.body.isPublic)
    const isForStaff = Boolean(req.body.isForStaff)
    const isForTeachers = Boolean(req.body.isForTeachers)
    const isForStudents = Boolean(req.body.isForStudents)
    const isForGraduated = Boolean(req.body.isForGraduated)

    Service.create({
        name : name,
        description : description,
        img : img,
        url : url,
        isPublic : isPublic,
        isForStaff : isForStaff,
        isForTeachers : isForTeachers,
        isForStudents : isForStudents,
        isForGraduated : isForGraduated
    }).then(result => {
        console.log("Added!")
        res.redirect('/addservice')
    }).catch(err => {
        console.log(err)
    })
};

exports.guides = (req, res, next) => {
    Guide.findAll( { order: [['id', 'DESC']]})
    .then(guides => {
        res.render('admin/guides', {
            isAuthenticated : req.session.isLoggedIn,
            isSuperAdmin : req.session.isSuperAdmin,
            guides : guides,
            pageTitle: 'لیست راهنما ها',
            path: '/guides'
        });
    }).catch(err => {
        console.log(err)
    })
}

exports.addguideGet = (req, res, next) => {
    res.render('admin/addguide', {
        isAuthenticated : req.session.isLoggedIn,
        isSuperAdmin : req.session.isSuperAdmin,
        pageTitle: 'اضافه کردن راهنما',
        path: '/addguide'
    });
};

exports.addguidePost = (req, res, next) => {
    const title = req.body.title
    const description = req.body.description
    const url = req.body.url
    
    const isPublic = Boolean(req.body.isPublic)
    const isForStaff = Boolean(req.body.isForStaff)
    const isForTeachers = Boolean(req.body.isForTeachers)
    const isForStudents = Boolean(req.body.isForStudents)
    const isForGraduated = Boolean(req.body.isForGraduated)

    Guide.create({
        title : title,
        description : description,
        url : url,
        isPublic : isPublic,
        isForStaff : isForStaff,
        isForTeachers : isForTeachers,
        isForStudents : isForStudents,
        isForGraduated : isForGraduated
    }).then(result => {
        console.log("Added!")
        res.redirect('/addguide')
    }).catch(err => {
        console.log(err)
    })
};

exports.addguideandserviceGet = (req, res, next) => {
    var serviceList
    var guideList
    Service.findAll({}).then(services => {
        serviceList = services
        return Guide.findAll({})
    }).then( guides =>{
        guideList = guides
    }).then(result => {
        res.render('admin/addguideandservice', {
            isAuthenticated : req.session.isLoggedIn,
            isSuperAdmin : req.session.isSuperAdmin,
            services : serviceList,
            guides : guideList,
            pageTitle: 'اتصال راهنما ها و خدمات',
            path: '/addguideandservice'
        });
    }).catch(err => {
        console.log(err)
    })
};

exports.addguideandservicePost = (req, res, next) => {
    const serviceId = req.body.service
    const guideId = req.body.guide
    var choosenGuide
    var choosenService
    Service.findAll({where : {id: serviceId}})
    .then(service =>{
        choosenService = service[0]
        return Guide.findAll({where : {id: guideId}})
    }).then(guide =>{
        choosenGuide = guide[0]
    }).then(result => {
        choosenService.addGuide(choosenGuide)
        console.log("Added!")
        res.redirect('/addguideandservice')
    }).catch(err => {
        console.log(err)
    })
};