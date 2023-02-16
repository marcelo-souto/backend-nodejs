const sequelize = require('./dbconfig.js');
const { DataTypes } = require('sequelize');

const Category = sequelize.define(
  'categories',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

module.exports = Category;
