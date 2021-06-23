module.exports = (connection,sequelize) => {

    return connection.define("teams",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:sequelize.STRING,
        leader: sequelize.STRING,
        created: sequelize.STRING
       
    });
};