const DB = require('../utils/database');

const { DataTypes } = require('sequelize');

const Category = DB.define('category', {
   id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
   },
   name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
   },
   todo_id: {
      type: DataTypes.INTEGER,
      allowNull: false
   }
},
{
   timestamps: false
   // ! sirve para NO CREAR las marcas de tiempo
});

module.exports = Category;