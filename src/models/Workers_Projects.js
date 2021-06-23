module.exports = (connection,sequelize) => {

    return connection.define("workers_projects",{
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        asignationDate: sequelize.DATE,
       
    });
};