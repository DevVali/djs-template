const Sequelize = require('sequelize');
const { dbUsername, dbPassword } = require('./config.json');

const sequelize = new Sequelize('your-bot-name-goes-here', dbUsername, dbPassword, {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sequelize.sqlite',
});

require('./models/Preferences.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize
    .sync({ force })
    .then(async () => {
        console.log('Database synced');
        sequelize.close();
    })
    .catch(console.error);
