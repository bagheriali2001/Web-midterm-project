const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Admin = sequelize.define('admin', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false,
         unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    isSuperAdmin:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = Admin