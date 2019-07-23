'use strict'

const articulos_model = require('../models/articulos.model');

var controller = {
    testGet: function(req, res){
        return res.status(200).send({mensaje:'get de carga ok!'});
    },
    testPost: function(req,res){
        if (req) return res.status(200).send({mensaje:'post de carga ok'});
    },

    carga: function(req,res){

        let producto = new articulos_model;
        producto.nombre = req.nombre;
        producto.categoria = req.categoria;
        producto.precio = req.precio;
        producto.ancho = req.ancho;
        producto.alto = req.alto;
        producto.largo = req.largo;

        return res.status(200).send({recibido: producto});
    }

}

module.exports = controller;