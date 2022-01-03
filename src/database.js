// config.js
require('dotenv').config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

const Sequelize = require('sequelize')

const database = new Sequelize('movie_catalog',DB_USERNAME,DB_PASSWORD,
    {   
        host: DB_HOST,
        database: 'movie_catalog',
        dialect: 'postgres',
        operatorsAliases: Sequelize.Op,
        logging: console.log
    }
)

const Title = database.define('title', {
    id: {type: Sequelize.STRING, primaryKey: true},
    title: {type: Sequelize.JSONB, allowNull: false}
})

const Service = database.define('service', {
    userId: {type: Sequelize.STRING, unique: 'user-name', allowNull: false},
    name: {type: Sequelize.STRING, unique: 'user-name', allowNull: false}
})

const TitleService = database.define('title_service', {
    location: Sequelize.STRING
})

TitleService.belongsTo(Title, {
    foreignKey: {allowNull: false, unique: 'title_service'},
    onDelete: 'cascade'
})

TitleService.belongsTo(Service, {
    foreignKey: {allowNull: false, unique: 'title_service'},
    onDelete: 'cascade'
})

module.exports = {
    Title, Service, TitleService, database
}