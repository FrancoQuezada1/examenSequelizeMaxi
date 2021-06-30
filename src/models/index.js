module.exports = (connection, sequelize) => {

    const Clients = require("./Clients");
    const Projects = require("./Projects");
    const Workers = require("./Workers");
    const Teams = require("./Teams");
    const WorkersProject = require("./Workers_Projects")
    const ClientsProject = require("./Clients_Projects");

    const clientsModel = Clients(connection, sequelize);
    const projectsModel = Projects(connection, sequelize);
    const workersModel = Workers(connection, sequelize);
    const teamsModel = Teams(connection, sequelize);
    const workers_projectsModel = WorkersProject(connection, sequelize);
    const clients_projectsModel = ClientsProject(connection, sequelize);

    workers_projectsModel.belongsTo(projectsModel, { foreignKey: 'project_id' });
    workers_projectsModel.belongsTo(workersModel, { foreignKey: 'worker_id' });
    workersModel.belongsTo(teamsModel, { foreignKey: 'team_id' })

    return {
        Client: clientsModel,
        Project: projectsModel,
        Worker: workersModel,
        Team: teamsModel,
        WorkerProject: workers_projectsModel,
        ClientProject: clients_projectsModel
    }
}

