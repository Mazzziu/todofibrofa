'use strict'

const express = require('express');
const app = express();


//middlewares
app.use(express.urlencoded({ extended:true })); //para pasar automaticamente todo lo que recibe a json
app.use(express.json());

// Configuracion de cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

//archivo de rutas
//const routes = require('./routes/routes.routes');
const cargaRoutes = require('./routes/carga.routes');
//rutas
app.use('/carga',cargaRoutes);

app.get('/test',function(req,res){
    return res.status(200).send({mensaje:'server ok!'});
});

//export
module.exports = app;

