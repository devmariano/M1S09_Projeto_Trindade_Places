const Sequelize = require('sequelize')


    const connection = new Sequelize({
        dialect: 'postgres', // qual banco vai se conecta
        host: 'localhost', //onde o banco está ?
        username: 'postgres', //qual usuario
        password: 'senai', // qual senha 
        database: 'trindade_places', //qual nome de dados
        define: {
          timestamps: true,
          underscored: true,
          underscoredAll: true,
        },
      })
/*
//outra forma de fazer
module.exports = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: 0
});*/


module.exports = connection;