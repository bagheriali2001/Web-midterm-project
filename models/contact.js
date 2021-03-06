const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Contact = sequelize.define('contact', {
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
    subject:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    text:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Contact