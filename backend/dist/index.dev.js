'use strict';

var express = require('express');

var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3050;
var app = express();
app.use(bodyParser.json()); // MySql

var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'SweetLife'
}); //Rutas
// Route

app.get('/', function (req, res) {
  res.send('Bienvenido a la API  de SweetLife!');
}); // Check connect

conexion.connect(function (error) {
  if (error) throw error;
  console.log('La Conexion se ha realizado con exito!');
}); //Listado de todos los clientes
// all customers

app.get('/clientes', function (req, res) {
  var sql = 'SELECT * FROM clientes';
  conexion.query(sql, function (error, results) {
    if (error) throw error;

    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('No hay resultado');
    }
  });
});
app.get('/clientes/:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT * FROM clientes WHERE id = ".concat(id);
  conexion.query(sql, function (error, result) {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('No hay resultado');
    }
  });
}); //Añadir

app.post('/add', function (req, res) {
  var sql = 'INSERT INTO clientes SET ?';
  var customerObj = {
    clientes: req.body.clientes,
    hora: req.body.hora
  };
  conexion.query(sql, customerObj, function (error) {
    if (error) throw error;
    res.send('Cliente creado!');
  });
});
app.put('/update/:id', function (req, res) {
  var id = req.params.id;
  var _req$body = req.body,
      clientes = _req$body.clientes,
      hora = _req$body.hora;
  var sql = "UPDATE clientes SET clientes = '".concat(clientes, "', hora='").concat(hora, "' WHERE id =").concat(id);
  connection.query(sql, function (error) {
    if (error) throw error;
    res.send('Cliente actualizado!');
  });
});
app.listen(PORT, function () {
  return console.log("Server running on port ".concat(PORT));
});