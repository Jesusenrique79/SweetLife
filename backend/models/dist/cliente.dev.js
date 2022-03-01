'use strict'; //IMPORTAR MONGOOSE

var mysql = require('mysql'); //DEFINIR UN SCHEMA


var Schema = mysql.Schema; //CREAR SCHEMA DE CLIENTE/ OBJETO MOLDE PARA UTILIZAR PARA CREAR NUEVOS 
//CLIENTES EN LA BASE DE DATOS 

var ClienteSchema = Schema({
  clientes: Integer,
  hora: Time
});
module.exports = mysql.model('Cliente', ClienteSchema);