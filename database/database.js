const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'lojinha', //Banco
    'postgres', //User
    'teste123', //Senha
    {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false
    }
);

module.exports = sequelize;