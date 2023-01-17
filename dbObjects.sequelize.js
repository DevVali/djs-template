const Sequelize = require('sequelize');
const { dbUsername, dbPassword } = require('./config.json');

const sequelize = new Sequelize('your-bot-name-goes-here', dbUsername, dbPassword, {
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
