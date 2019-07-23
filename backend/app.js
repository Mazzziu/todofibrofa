'use strict'

const express = require('express');
const app = express();


//middlewares
app.use(express.urlencoded({ extended:true })); //para pasar automaticamente todo lo que recibe a json
app.use(express.json());

//cors

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

