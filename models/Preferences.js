module.exports = (sequelize, DataTypes) => {
    return sequelize.define('preferences', {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
        },
        item: DataTypes.TEXT,
    });
};
