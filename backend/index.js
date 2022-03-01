'use strict'

const express = require('express');


const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// MySql

const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'SweetLife'
});


//Rutas

// Route
app.get('/', (req, res) => {
    res.send('Bienvenido a la API  de SweetLife!');
});

// Check connect
conexion.connect(error => {
    if (error) throw error;
    console.log('La Conexion se ha realizado con exito!');
});

//Listado de todos los clientes

// all customers
app.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM clientes';

    conexion.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('No hay resultado');
        }
    });
});

app.get('/clientes/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM clientes WHERE id = ${id}`;
    conexion.query(sql, (error, result) => {
        if (error) throw error;

        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay resultado');
        }
    });
});

//Añadir

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO clientes SET ?';

    const customerObj = {
        clientes: req.body.clientes,
        hora: req.body.hora
    };

    conexion.query(sql, customerObj, error => {
        if (error) throw error;
        res.send('Cliente creado!');
    });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { clientes, hora } = req.body;
    const sql = `UPDATE clientes SET clientes = '${clientes}', hora='${hora}' WHERE id =${id}`;

    connection.query(sql, error => {
        if (error) throw error;
        res.send('Cliente actualizado!');
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));