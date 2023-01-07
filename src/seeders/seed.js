const db = require('../utils/database');
const Users = require('../models/users.model');
const Todo = require('../models/todo.model');

const users = [
   {
      username: 'Ariel',
      email: 'ariel@gmail.com',
      password: '1234'
   },
   {
      username: 'Alejandro',
      email: 'alejandro@gmail.com',
      password: '1234'
   },
   {
      username: 'Maria',
      email: 'maria@gmail.com',
      password: '1234'
   },
   {
      username: 'Pedro',
      email: 'pedro@gmail.com',
      password: '1234'
   },
]

const todos = [
   { title: 'Tarea 1', description: 'task n1 description', user_id: 1 },
   { title: 'Tarea 2', description: 'task n2 description', user_id: 1 },
   { title: 'Tarea imposible', user_id: 3 },
   { title: 'Dormir', description: 'porque node no me deja', user_id: 2 }
]


//? todos los métodos tienen los métodos =>
//? create.. => insertar datos en la DB.. 
//? findOne... findAll.. findByPk..
//? update..
//? destroy..

db.sync({ force: true })
   .then(() => {
      console.log('Iniciando con el sembradio malicioso..');
      users.forEach((user) => Users.create(user));
      //! recorro con forEach el arreglo 'users' y cargo datos con '.create'..


      //! setTimeout se usa para hacer el .create desp de que se creen los usuarios
      setTimeout(() => {
         todos.forEach((todo) => Todo.create(todo));
      }, 100);
   })
   .catch((error) => console.log(error));