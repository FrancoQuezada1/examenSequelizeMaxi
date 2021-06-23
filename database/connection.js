const { config } = require("../config/config.js");
const initialModels = require("../src/models");

const Sequelize = require("sequelize");

const connection = new Sequelize(config.database_name, config.database_user, config.database_password, {
    host: 'localhost',
    dialect: 'mysql'
});

const { Client, Project, Worker, Team, WorkerProject, ClientProject } = initialModels(connection, Sequelize);

connection.sync({ force: false }).then(() => {
    console.log("Funciona!!");
}).catch(e => {
    console.log(e);
});


module.exports = {

    Client, 
    Project, 
    Worker, 
    Team, 
    WorkerProject, 
    ClientProject

}