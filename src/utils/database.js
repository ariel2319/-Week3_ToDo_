// ! aquí vamos a crear la base de datos o la conexión
// importamos sequelize..
const { Sequelize } = require('sequelize');

// ? creamos una instancia con parámetros de configuración de nuestra base de datos
// ? necesitamos un Objeto de configuración => credenciales de mi base de datos
const db = new Sequelize({
   database: 'todoapp2',
   username: 'postgres',
   host: 'localhost', // ? => 127.0.0.1 = localhost
   port: '2319', // ! puerto de la DB del psql
   password: '23areilo23', //! pass de la DB del psql
   dialect: 'postgres', //! tipo DB que estamos usando => postgres 
});

// ! exporto la instancia de 'db' para que la pueda leer el resto de la app
module.exports = db;