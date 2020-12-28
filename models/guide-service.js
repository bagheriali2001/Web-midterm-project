const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const GuideService = sequelize.define('guideService', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = GuideService