const Sequelize = require('sequelize');
//conectar com arquivo index.js do database para efetuar a conecção ao BD
const connection = require('../database');
//inserir o nome do modelo e criar a tabela.. sempre minusculo se for duas palavras colocar user_product
//definir nome, abrir um objeto para definir os atributos 
const Instituto = connection.define('instituto', {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    telephone:{
        type:Sequelize.STRING,
        allowNull:false
    },
    opening_hours:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    }
})
module.exports = Instituto;
