module.exports = (connection,sequelize) => {

    return connection.define("clients",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        direction: sequelize.STRING,
        phone: sequelize.STRING,
        email: sequelize.STRING,
        manager: sequelize.STRING
    });
};