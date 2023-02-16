const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/database/store.db'
});

sequelize
  .authenticate()
  .then(() => console.log('Conectado com sucesso ao banco'))
  .catch((error) => console.log(`Erro: ${error}`));

module.exports = sequelize;