const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const pGsession = require('connect-pg-simple')(session)


const sequelize = require('./util/database')

const errorController = require('./controllers/error');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

const Guide = require('./models/guide')
const Service = require('./models/service')
const GuideService = require('./models/guide-service');
const { Cookie } = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    store: new pGsession({
        conString: "postgres://vpspsql:root7613@dumas.ir:5432/nit-ar"
    }),
    secret: "somerandomsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 100 * 60 * 60 * 24}
}))

//app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(adminRoutes);
app.use(authRoutes);

app.use(errorController.get404);

Service.belongsToMany(Guide , {through : GuideService})
Guide.belongsToMany(Service , {through : GuideService})

// sequelize.sync({force:true})
sequelize.sync()
    .then(result => {
        // console.log(result)
        app.listen(3000)
    }).catch(err => {
        console.log(err)
    })
