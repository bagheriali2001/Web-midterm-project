const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Service = sequelize.define('service', {
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
    url:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    },
    img:{
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
    }
});

module.exports = Service