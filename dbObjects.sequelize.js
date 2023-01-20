const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sequelize.sqlite',
});

const Preferences = require('./models/Preferences.js')(
    sequelize,
    Sequelize.DataTypes
);

module.exports = { Preferences };
