const Sequelize = require('sequelize')

const sequelize = new Sequelize('nit-ar', 'vpspsql', 'root7613', {
    host: 'dumas.ir',
    dialect: 'postgres'
});

module.exports = sequelize