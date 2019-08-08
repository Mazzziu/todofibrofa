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

        producto.codigo = req.body.codigo;
        producto.nombre = req.body.nombre;
        producto.categoria = req.body.categoria;
        producto.precio = req.body.precio;
        producto.ancho = req.body.ancho;
        producto.alto = req.body.alto;
        producto.largo = req.body.largo;
        producto.stock = req.body.stock;

        console.log(req.body.nombre);
        //return res.status(200).send({'recibido': producto});

        producto.save(function(err,productStored){

            if (err) return res.status(500).send({mensaje: 'no se pudo guardar el producto'});
            if (!productStored) return res.status(404).send({mensaje:'producto no encontrado'});
            return res.status(200).send({
                                            mensaje:'Producto guardado correctamente',
                                            producto: productStored
                                        });
        });

    }

}

module.exports = controller;