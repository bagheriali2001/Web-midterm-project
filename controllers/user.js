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