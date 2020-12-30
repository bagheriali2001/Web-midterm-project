const Admin = require('../models/admin')

exports.loginGet = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'ورود',
        path: '/login'
    });
};

exports.loginPost = (req, res, next) => {
    
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