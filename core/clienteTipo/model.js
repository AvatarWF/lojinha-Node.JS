const Sequelize = require('sequelize');
const DB = require('../../database/database');

const TipoCliente = DB.define(
    'tipocliente',
    {
        id:{
            type: Sequelize.INTEGER,
            required: true,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.INTEGER,
            required: true
        }
    },
    {
        tableName: 'tipocliente',
        schema: 'public',
        freezeTableName: false,
        timesTemps: false
    }
)

module.exports = TipoCliente;