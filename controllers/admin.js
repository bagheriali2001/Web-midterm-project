const News = require('../models/news')
const Cooperation = require('../models/cooperation')
const Contact = require('../models/contact')
const Service = require('../models/service')
const Guide = require('../models/guide')
const formidable = require('formidable');


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

exports.services = (req, res, next) => {
    Service.findAll( { order: [['id', 'DESC']]})
    .then(services => {
        res.render('admin/services', {
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
        pageTitle: 'اضافه کردن خدمات',
        path: '/addservice'
    });
};

exports.addservicePost = (req, res, next) => {
 
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        console.log(fields)
        console.log(files)
        // res.json({ fields, files });
    });
    // const {
    //     isFor
    // } = req.body
    // isFor.forEach(temp => console.log(temp))
    console.log("req.body.isPublic = " + req.body.isPublic)
    console.log("req.body.isForStaff = " + req.body.isForStaff)
    console.log("req.body.isForTeachers = " + req.body.isForTeachers)
    console.log("req.body.isForStudents = " + req.body.isForStudents)
    console.log("req.body.isForGraduated = " + req.body.isForGraduated)
    const name = req.body.name
    const description = req.body.description
    const img = req.body.img
    const url = req.body.url
    const isPublic = true
    const isForStaff = true
    const isForTeachers = true
    const isForStudents = true
    const isForGraduated = true
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
        pageTitle: 'اضافه کردن راهنما',
        path: '/addguide'
    });
};

exports.addguidePost = (req, res, next) => {
    const title = req.body.title
    const description = req.body.description
    const url = req.body.url
    const isPublic = true
    const isForStaff = true
    const isForTeachers = true
    const isForStudents = true
    const isForGraduated = true
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
    var services
    var guides
    Service.findAll({}).then(services => {
        services = services
        Guide.findAll({}).then(guides => {
            guides = guides
        })
    }).then( result =>{
        res.render('admin/addguideandservice', {
            services : services,
            guides : guides,
            pageTitle: 'اتصال راهنما ها و خدمات',
            path: '/addguideandservice'
        });
    }).catch(err => {
        console.log(err)
    })
};

exports.addguideandservicePost = (req, res, next) => {
    const serviceId = req.body.serviceId
    const guideId = req.body.guideId
    var guide
    var service
    Service.findById({where : {id: serviceId}})
    .then(service =>{
        service = service
        Guide.findById({where : {id: guideId}})
        .then(guide =>{
            guide = guide
        })
    }).then(result => {
        service.addGuide(guide)
    }).catch(err => {
        console.log(err)
    })
};