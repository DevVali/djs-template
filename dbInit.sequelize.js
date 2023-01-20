const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sequelize.sqlite',
});

require('./models/Preferences.js')(sequelize, Sequelize.DataTypes);

sequelize
    .sync({ alter: true })
    .then(async () => {
        console.log('Database synced');
        sequelize.close();
    })
    .catch(console.error);
