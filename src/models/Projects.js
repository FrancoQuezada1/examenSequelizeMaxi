module.exports = (connection,sequelize) => {

    return connection.define("projects",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        dateToSend: sequelize.DATE,
        budget: sequelize.STRING
    });
};