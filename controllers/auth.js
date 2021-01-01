const Admin = require('../models/admin')

exports.loginGet = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'ورود',
        path: '/login'
    });
};

exports.loginPost = (req, res, next) => {
    const adminUsername = req.body.username
    const adminPassword = req.body.password
    Admin.findAll({where : {username: adminUsername, password: adminPassword}})
    .then(admin =>{
        if(admin.length < 1){
            res.redirect('/login')
        }
        else{
            req.session.isLoggedIn = true
            req.session.isSuperAdmin = admin[0].isSuperAdmin
            req.session.username = admin[0].username
            res.redirect('/addnews')
        }
    }).catch(err => {
        console.log(err)
    })
};

exports.logoutGet = (req, res, next) => {
    req.session.destroy( err =>{
        console.log(err)
        res.redirect('/home')
    })
};

exports.addAdminGet = (req, res, next) => {
    res.render('auth/addAdmin', {
        isAuthenticated: req.session.isLoggedIn,
        isSuperAdmin: req.session.isSuperAdmin,
        pageTitle: 'تعریف ادمین جدید',
        path: '/addadmin'
    });
};

exports.addAdminPost = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password
    var name = req.body.name
    Admin.create({name: name, 
        username: username, 
        password: password,
        isSuperAdmin: false
    }).then(result => {
        console.log("Added!")
        res.redirect('/addadmin')
    }).catch(err => {
        console.log(err)
    })
};

exports.changePasswordGet = (req, res, next) => {
    res.render('auth/changePassword', {
        isAuthenticated: req.session.isLoggedIn,
        isSuperAdmin: req.session.isSuperAdmin,
        username: req.session.username,
        pageTitle: 'تغییر رمز',
        path: '/changepassword'
    });
};

exports.changePasswordPost = (req, res, next) => {
    const username = req.session.username
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    Admin.findAll({where : {username: username, password: oldPassword}})
    .then(admin =>{
        return admin.password = newPassword
    }).then(result =>{
        console.log("Password Changed !")
        res.redirect('/changepassword')
    }).catch(err => {
        console.log(err)
    })
};