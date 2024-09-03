const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuração do banco de dados SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH || './database.sqlite'
});

module.exports = sequelize;
