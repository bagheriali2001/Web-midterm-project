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
        }
    })
};

exports.logoutPost = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err)
        res.redirect('/home')
    })
};

exports.addadminGet = (req, res, next) => {
    res.render('auth/addAdmin', {
        pageTitle: 'تعریف ادمین جدید',
        path: '/addadmin'
    });
};

exports.addadminPost = (req, res, next) => {
    
};

exports.changepasswordGet = (req, res, next) => {
    res.render('auth/changePassword', {
        pageTitle: 'تغییر رمز',
        path: '/changepassword'
    });
};

exports.changepasswordPost = (req, res, next) => {

};