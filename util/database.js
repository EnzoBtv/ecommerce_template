const Sequelize = require('sequelize/index');

const sequelize = new Sequelize('node-complete', 'root', '102030quarenta', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;