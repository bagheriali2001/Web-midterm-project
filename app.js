const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');//???????????????????????????????????

const sequelize = require('./util/database')

const errorController = require('./controllers/error');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

const Guide = require('./models/guide')
const Service = require('./models/service')
const GuideService = require('./models/guide-service')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

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
