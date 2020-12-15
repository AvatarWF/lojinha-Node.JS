const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    
   process.env.DATABASE_NAME || 'lojinha', //Banco
   process.env.DATABASE_USER || 'postgres', //User
   process.env.DATABASE_PASS || 'teste123', //Senha
    {
        host: process.env.DATABASE_HOST || 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorsAliases: false,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;