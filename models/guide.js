const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Guide = sequelize.define('guide', {
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
    url:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    isPublic:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isForStaff:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isForTeachers:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isForStudents:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    isForGraduated:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = Guide