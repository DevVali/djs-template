const Sequelize = require('sequelize');

const sequelize = new Sequelize({
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
