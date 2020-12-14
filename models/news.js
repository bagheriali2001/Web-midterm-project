const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const News = sequelize.define('news', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false
    },
    author:{
        type: Sequelize.STRING,
        allowNull: false
    },
    text:{
        type: Sequelize.STRING,
        allowNull: false
    },
});